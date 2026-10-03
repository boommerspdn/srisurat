import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: true,
  staticPageGenerationTimeout: 240,
};

export default nextConfig;
