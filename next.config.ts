import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/countries",
        destination: "/destinations",
        permanent: true,
      },
      {
        source: "/countries/:slug",
        destination: "/destinations/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
