import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL(`${process.env.STRAPI_MEDIA_URL}/*`)],
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
