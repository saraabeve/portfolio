import type { NextConfig } from "next";

// Static export so the site can be hosted on GitHub Pages (or any static host).
// BASE_PATH is set by the GitHub Pages workflow, e.g. "/portfolio".
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
};

export default nextConfig;
