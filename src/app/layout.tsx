import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "LALOLI Pathway — Laugh, Love, Live",
  description: "LALOLI Pathway Inc. empowers children and young adults through accessible education, mental health support, mentorship, and AI-driven learning tools. Rooted in Laugh, Love, Live.",
  keywords: "LALOLI, pathway, nonprofit, education, youth, mental health, mentorship, AI learning, laugh love live",
  openGraph: {
    title: "LALOLI Pathway",
    description: "Empowering children and young adults — Laugh, Love, Live.",
    url: "https://laloli.net",
    siteName: "LALOLI Pathway",
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
