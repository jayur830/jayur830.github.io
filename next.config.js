const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  images: {
    unoptimized: true,
  },
  assetPrefix: './assets',
  pageExtensions: ['page.js', 'page.jsx', 'page.ts', 'page.tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  redirects() {
    return [
      {
        source: '/:path((?!resume$).*)',
        destination: '/resume',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
