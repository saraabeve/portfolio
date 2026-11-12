import type { NextConfig } from "next";

// Static export so the site can be hosted on GitHub Pages (or any static host).
// BASE_PATH is set by the GitHub Pages workflow, e.g. "/portfolio".
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH || "",
  images: { unoptimized: true },
};

export default nextConfig;
