import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { PlausibleProvider } from "./_providers/plausible";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="pikpok.vercel.app" />
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

