import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const allowedOrigin =
      process.env.NODE_ENV === "production"
        ? "https://todosobrepugs.store"
        : "http://localhost:3000";

    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: allowedOrigin,
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization, X-Requested-With",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
        ],
      },
    ];
  },

  env: {
    NEXTAUTH_URL:
      process.env.NODE_ENV === "production"
        ? "https://todosobrepugs.store"
        : "http://localhost:3000",
  },
};

export default nextConfig;
