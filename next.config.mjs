/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(gql|graphql)$/i,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    );

    return config;
  },
};

export default nextConfig;
