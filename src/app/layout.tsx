import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dripwises – AI-Powered Knowledge Digests",
  description:
    "Dripwises helps you extract meaningful insights and golden nuggets of information from your tools, chats, and platforms — all in one smart digest.",
  metadataBase: new URL("https://dripwises.netlify.app"),
  openGraph: {
    title: "Dripwises – AI-Powered Knowledge Digests",
    description:
      "Get smart digests from all your platforms. Powered by AI, built for clarity.",
    url: "https://dripwises.netlify.app",
    siteName: "Dripwises",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dripwises – AI-Powered Knowledge Digests",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dripwises – AI-Powered Knowledge Digests",
    description:
      "Your productivity companion for discovering insights across your digital workspaces.",
    images: ["/og-image.png"],
    creator: "@vrushik11",
  },
  keywords: [
    "Dripwises",
    "AI digest",
    "knowledge summarization",
    "insight generator",
    "team intelligence",
    "productivity tools",
    "AI-powered summaries",
  ],
  authors: [
    { name: "Vrushik Visavadiya", url: "https://www.vrushikvisavadiya.com/" },
  ],
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
