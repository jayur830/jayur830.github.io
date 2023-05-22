const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
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
};

module.exports = nextConfig;
