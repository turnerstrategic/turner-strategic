import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@turner-strategic/ui",
    "@turner-strategic/common",
    "@turner-strategic/design-system",
  ],
};

export default nextConfig;
