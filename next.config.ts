import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['example.com', 'i.ibb.co'],
  },
  // Disable type checking during build
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
