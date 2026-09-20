import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "FOCUS | Classic Branding. Modern Marketing. Digital Development.",
  description:
    "FOCUS is a founder-led multidisciplinary business, branding, marketing and digital development company founded by Praveen."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
