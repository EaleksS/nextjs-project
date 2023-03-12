/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: { domains: ['example.com'], formats: ['image/avif', 'image/webp'] },
};

module.exports = nextConfig;
