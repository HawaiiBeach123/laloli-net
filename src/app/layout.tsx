import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Laloli Foundation — Building Bridges of Hope",
  description: "Laloli Foundation is a nonprofit organization dedicated to building bridges of hope and compassion across communities through education, cultural exchange, and community service.",
  keywords: "nonprofit, foundation, community, volunteer, donate, education, cultural exchange",
  openGraph: {
    title: "Laloli Foundation",
    description: "Building bridges of hope and compassion across communities.",
    url: "https://laloli.net",
    siteName: "Laloli Foundation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
