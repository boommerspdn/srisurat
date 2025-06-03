import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL(`${process.env.STRAPI_API_URL}/uploads/**`)],
  },
};

export default nextConfig;
