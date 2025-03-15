import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/ICEG", // Your GitHub Pages repo name
  // assetPrefix: "/ICEG/", // Fix missing CSS/JS
  // trailingSlash: true, // Ensures proper routing
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
