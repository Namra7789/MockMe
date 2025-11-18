import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Removed eslint configuration as it is not part of NextConfig type
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
