import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wefocus.in"),
  title: "weFOCUS — Classic Branding. Modern Marketing. Digital Development.",
  description:
    "weFOCUS is a multidisciplinary practice built across research, design, products, marketing and business strategy.",
  keywords: [
    "weFOCUS",
    "Praveen",
    "wefocus.in",
    "Classic Branding",
    "Modern Marketing",
    "Digital Development",
    "UX Research",
    "UI/UX",
    "SEO",
    "ASO",
    "Business Consulting",
    "Tamil Nadu"
  ],
  authors: [{ name: "Praveen", url: "https://wefocus.in" }],
  openGraph: {
    title: "weFOCUS — Classic Branding. Modern Marketing. Digital Development.",
    description:
      "A multidisciplinary practice built across research, design, products, marketing and business strategy.",
    url: "https://wefocus.in",
    siteName: "weFOCUS",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "weFOCUS — Classic Branding. Modern Marketing. Digital Development.",
    description: "Connecting research, design, marketing and business strategy."
  },
  alternates: {
    canonical: "https://wefocus.in"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#0A0A0C] text-[#F4F4F6] font-sans antialiased selection:bg-[#F4F4F6] selection:text-[#0A0A0C]">
        {children}
      </body>
    </html>
  );
}
