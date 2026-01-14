import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === 'production' ? '/MyWebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/MyWebsite' : '',
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
