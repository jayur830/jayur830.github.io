const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ];
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['page.js', 'page.jsx', 'page.ts', 'page.tsx', 'api.js', 'api.jsx', 'api.ts', 'api.tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.(gql|graphql)$/i,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    return config;
  },
  // redirects() {
  //   return [
  //     {
  //       source: '/:path((?!resume$).*)',
  //       destination: '/resume',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
