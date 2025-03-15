import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/iceg", // Ensure this matches your repo name!
  assetPrefix: "/iceg/", // Trailing slash is important!
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
