import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";
import path from "node:path";

const withNextIntl = createNextIntlPlugin();

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withNextIntl(nextConfig);
// Orchids restart: 1767763788994
