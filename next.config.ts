import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://nexlearn.noviindusdemosites.in/:path*",
      },
    ];
  },
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
