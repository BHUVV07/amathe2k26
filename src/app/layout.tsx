import type { Metadata, Viewport } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#252451",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "AMATHE 2026 — 3rd International Conference | PESITM",
  description:
    "Advances in Modern Age Technologies for Health and Engineering Science (AMATHE 2026) — 3rd International Conference & AICTE Sponsored. Dec 10–11, 2026 at PESITM, Shivamogga, Karnataka, India (Hybrid Mode).",
  keywords: [
    "AMATHE",
    "AMATHE 2026",
    "PESITM",
    "Conference",
    "AICTE Sponsored",
    "Health and Engineering Science",
    "Shivamogga",
    "International Conference",
    "CPSM",
  ],
  authors: [{ name: "PESITM Shivamogga" }],
  openGraph: {
    title: "AMATHE 2026 — 3rd International Conference & AICTE Sponsored",
    description:
      "Advances in Modern Age Technologies for Health and Engineering Science | 10–11, Dec 2026 | PESITM, Shivamogga (Hybrid Mode)",
    url: "https://www.amathe.in",
    siteName: "AMATHE 2026",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dancingScript.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#252451] text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
