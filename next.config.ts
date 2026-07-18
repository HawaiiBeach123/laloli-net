import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // TODO: Remove each entry as its page gets real content and goes live.
    // These pages still exist in src/app but contain draft/placeholder content,
    // so we temporarily redirect visitors (and search engines) to the homepage.
    const hiddenPages = [
      "/programs",
      "/events",
      "/news",
      "/gallery",
      "/team",
      "/volunteer",
    ];
    return hiddenPages.map(source => ({
      source,
      destination: "/",
      permanent: false,
    }));
  },
};

export default nextConfig;
