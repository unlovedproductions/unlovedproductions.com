import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  async rewrites() {
    return [
      {
        source: "/privacy-quiz",
        destination: "/privacy-quiz/index.html",
      },
      {
        source: "/ghost-protocol",
        destination: "/ghost-protocol/index.html",
      },
    ];
  },
};

export default nextConfig;
