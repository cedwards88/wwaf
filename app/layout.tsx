import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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
  description: "A literary sci-fi novel about what happens when something gives you everything — and asks for nothing. When an alien intelligence arrives and begins solving humanity's greatest problems, a surgeon in São Paulo asks the question no one else will: What happens when it stops giving?",
  keywords: ["literary fiction", "science fiction", "novel", "Jackson Walker", "AI fiction"],
  authors: [{ name: "Jackson Walker" }],
  openGraph: {
    title: "What We Asked For | A Novel by Jackson Walker",
    description: "A literary sci-fi novel about what happens when something gives you everything — and asks for nothing.",
    type: "website",
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
      <body className="min-h-full bg-neutral-950 text-stone-200 font-serif">{children}</body>
    </html>
  );
}
