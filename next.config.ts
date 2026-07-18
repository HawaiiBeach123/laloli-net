import type { NextConfig } from "next";

// Set this in the laloli-net Vercel project's env vars to your deployed DHDS
// app URL, e.g. https://dhds-next.vercel.app  — until it's set, nothing changes.
const DHDS_ORIGIN = process.env.DHDS_ORIGIN;

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
  async rewrites() {
    // Serve the separate DHDS app at laloli.net/DHDS by transparently
    // forwarding to its own deployment. No-op until DHDS_ORIGIN is set.
    if (!DHDS_ORIGIN) return [];
    return [
      { source: "/DHDS", destination: `${DHDS_ORIGIN}/DHDS` },
      { source: "/DHDS/:path*", destination: `${DHDS_ORIGIN}/DHDS/:path*` },
    ];
  },
};

export default nextConfig;
