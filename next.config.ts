// next.config.ts

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
};

export default nextConfig;
