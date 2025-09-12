'use client';

import React from 'react';
import { Vortex } from './ui/vortex';
import { AnimatedText } from './AnimatedText';
import { Button } from './Button';

export const HeroPage = () => {
  return (
    <section className="w-full relative">
      <div className="mx-auto w-full max-w-screen-xl rounded-md overflow-hidden">
        <main className="relative pt-16 sm:pt-20 lg:pt-24">

          <Vortex className="relative mx-auto flex min-h-svh w-full items-center justify-center px-4 sm:px-6 lg:px-8">
    
            {/* Hero */}
            <section className="flex w-full max-w-5xl flex-col items-center justify-center text-center relative z-10">
              <div className="relative space-y-6">
                <div className="relative inline-block">
                  <AnimatedText
                    text="Meghana Rao Nadendla"
                    className="text-base sm:text-lg md:text-xl text-gray-600 font-light"
                  />
                  <h1 className="m-0 mt-4 bg-gradient-to-r from-[#1CA75B] to-[#70B9F0] bg-clip-text text-transparent font-bold leading-tight tracking-tight text-[clamp(1.75rem,5.5vw,4rem)]">
                    Healing, Innovation, and Impact
                  </h1>
                </div>

                <h2 className="text-[clamp(0.95rem,2.6vw,1.35rem)] text-gray-600 font-light flex flex-wrap items-center justify-center gap-2">
                  <span>Clinical Pharmacist</span>
                  <span className="opacity-50">|</span>
                  <span>Psychologist</span>
                  <span className="opacity-50">|</span>
                  <span>Social Entrepreneur</span>
                </h2>

                <div className="pt-6 sm:pt-8 flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <Button href="/about" className="relative overflow-hidden group w-full xs:w-auto sm:w-auto">
                    <span className="relative z-10">Know about me</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1CA75B] to-[#70B9F0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </div>
              </div>
            </section>
          </Vortex>
        </main>
      </div>
    </section>
  );
};
