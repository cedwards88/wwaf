import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "What We Asked For | A Novel by Jackson Walker",
  description:
    "When an alien intelligence arrives and begins solving humanity's greatest problems, a surgeon in São Paulo asks the question no one else will: What happens when it stops giving? Literary sci-fi for readers of Station Eleven, Severance, and The Leftovers.",
  keywords: [
    "literary fiction",
    "science fiction",
    "novel",
    "Jackson Walker",
    "AI fiction",
    "Station Eleven",
    "debut novel",
    "speculative fiction",
  ],
  authors: [{ name: "Jackson Walker" }],
  metadataBase: new URL("https://wwaf.ai"),
  openGraph: {
    title: "What We Asked For — A Novel by Jackson Walker",
    description:
      "What happens when something gives you everything — and asks for nothing? Literary sci-fi for readers of Station Eleven and Severance.",
    type: "website",
    url: "https://wwaf.ai",
    siteName: "What We Asked For",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "What We Asked For — A Novel by Jackson Walker",
    description:
      "What happens when something gives you everything — and asks for nothing?",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="min-h-full bg-neutral-950 text-stone-200 font-serif">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
