import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

interface VortexProps {
  particleCount?: number;
  rangeY?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  baseHue?: number;
  backgroundColor?: string;
  containerClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

interface ParticleProps {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  ttl: number;
  speed: number;
  radius: number;
  hue: number;
}

export const Vortex: React.FC<VortexProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  const particleCount = props.particleCount ?? 1700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY ?? 250;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed ?? 0.0;
  const rangeSpeed = props.rangeSpeed ?? 1.5;
  const baseRadius = props.baseRadius ?? 2;
  const rangeRadius = props.rangeRadius ?? 2;
  const baseHue = props.baseHue ?? 220;
  const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = "#ffffff";

  let tick = 0;
  const noise3D = createNoise3D();
  let particleProps = new Float32Array(particlePropsLength);
  const center: [number, number] = [0, 0];

  const TAU = 2 * Math.PI;

  const rand = (n: number): number => n * Math.random();
  const randRange = (n: number): number => n - rand(2 * n);
  const fadeInOut = (t: number, m: number): number => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number): number => {
    return (1 - speed) * n1 + speed * n2;
  };

  const initParticle = useCallback((i: number): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const particle: ParticleProps = {
      x: rand(canvas.width),
      y: center[1] + randRange(rangeY),
      vx: 0,
      vy: 0,
      life: 0,
      ttl: baseTTL + rand(rangeTTL),
      speed: baseSpeed + rand(rangeSpeed),
      radius: baseRadius + rand(rangeRadius),
      hue: baseHue + rand(rangeHue),
    };

    particleProps.set(
      [
        particle.x,
        particle.y,
        particle.vx,
        particle.vy,
        particle.life,
        particle.ttl,
        particle.speed,
        particle.radius,
        particle.hue,
      ],
      i
    );
  }, [baseHue, baseRadius, baseSpeed, rangeHue, rangeRadius, rangeSpeed, rangeTTL, rangeY]);

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D
  ): void => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,30%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement): boolean => {
    return x > canvas.width || x < 0 || y > canvas.height || y < 0;
  };

  const resize = (canvas: HTMLCanvasElement): void => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    center[0] = 0.5 * canvas.width;
    center[1] = 0.5 * canvas.height;
  };

  const updateParticle = useCallback((i: number, ctx: CanvasRenderingContext2D): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const i2 = 1 + i;
    const i3 = 2 + i;
    const i4 = 3 + i;
    const i5 = 4 + i;
    const i6 = 5 + i;
    const i7 = 6 + i;
    const i8 = 7 + i;
    const i9 = 8 + i;

    const n =
      noise3D(particleProps[i] * xOff, particleProps[i2] * yOff, tick * zOff) *
      noiseSteps *
      TAU;

    const vx = lerp(particleProps[i3], Math.cos(n), 0.5);
    const vy = lerp(particleProps[i4], Math.sin(n), 0.5);
    let life = particleProps[i5]; // keeps let (we increment)
    const ttl = particleProps[i6];
    const speed = particleProps[i7];
    const x2 = particleProps[i] + vx * speed;
    const y2 = particleProps[i2] + vy * speed;
    const radius = particleProps[i8];
    const hue = particleProps[i9];

    drawParticle(
      particleProps[i],
      particleProps[i2],
      x2,
      y2,
      life,
      ttl,
      radius,
      hue,
      ctx
    );

    life++;

    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;

    (checkBounds(x2, y2, canvas) || life > ttl) && initParticle(i);
  }, [initParticle, noise3D]);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D): void => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  }, [particlePropCount, particlePropsLength, updateParticle]);

  const renderGlow = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void => {
    ctx.save();
    ctx.filter = "blur(8px) brightness(150%)";
    ctx.globalCompositeOperation = "multiply";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.filter = "blur(4px) brightness(150%)";
    ctx.globalCompositeOperation = "multiply";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const renderToScreen = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const draw = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void => {
    tick++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawParticles(ctx);
    renderGlow(canvas, ctx);
    renderToScreen(canvas, ctx);

    animationFrameId.current = window.requestAnimationFrame(() => draw(canvas, ctx));
  }, [backgroundColor, drawParticles]);

  const initParticles = useCallback((): void => {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  }, [initParticle, particlePropCount, particlePropsLength]);

  const setup = useCallback((): void => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        resize(canvas);
        initParticles();
        draw(canvas, ctx);
      }
    }
  }, [draw, initParticles]);

  const handleResize = useCallback((): void => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      resize(canvas);
    }
  }, []);

  useEffect(() => {
    setup();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [handleResize, setup]);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>
      <div className={cn("relative z-10", props.className)}>{props.children}</div>
    </div>
  );
};
