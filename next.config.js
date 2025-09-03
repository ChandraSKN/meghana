/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // This is the essential change for GitHub Pages.
  // It tells Next.js to generate a folder of static HTML, CSS, and JS files.
  // GitHub Pages is a static host and cannot run the Next.js server.
  output: 'export',

  // The 'basePath' is crucial for ensuring all your assets (images, fonts, etc.)
  // are loaded correctly from the sub-directory that GitHub Pages uses.
  // Replace 'your-repository-name' with the exact name of your GitHub repository.
  basePath: isProd ? '/meghana' : '',

  images: {
    // This setting is required because the Next.js image optimization feature
    // relies on a server, which is not available on GitHub Pages.
    unoptimized: true,
    qualities: [75, 85, 90, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig;
