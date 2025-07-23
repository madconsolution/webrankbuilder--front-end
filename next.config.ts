import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gstatic.com",
        port: "",
        pathname: "/recaptcha/api2/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 🚫 Disable Turbopack (which is experimental)
  experimental: {
    turbo: {
      // Disable the dev server
      server: false,
      // Disable the client
      client: false,
    },
  },
};

export default nextConfig;
