import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "AI 股票分析平台",
  description: "股票、加密貨幣、自選股、K 線與 AI 分析",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "AI 股票",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-foreground`}
      >
        <div className="iphone-app-shell mx-auto min-h-dvh w-full max-w-[430px] bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
          {children}
        </div>
      </body>
    </html>
  );
}
