import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 only accepts the qualities listed here (90 is used for the project mockups)
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/de2gmvbew/**',
      },
    ],
  },
};

export default nextConfig;
