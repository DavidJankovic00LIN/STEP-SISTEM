import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Potrebno za static export
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
  trailingSlash: true, // Bolje za cPanel routing
};

export default nextConfig;
