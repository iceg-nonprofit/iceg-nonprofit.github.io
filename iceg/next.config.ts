import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export mode
  basePath: "/iceg", // Path for GitHub Pages
  assetPrefix: "/iceg", // Prefix for static assets
  eslint: {
    ignoreDuringBuilds: true, // Optionally ignore ESLint during builds
  },
};

export default nextConfig;
