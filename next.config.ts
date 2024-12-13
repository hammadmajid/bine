import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here
});

export default withMDX(nextConfig);
