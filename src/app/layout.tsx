import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PulseSyncAI",
  description: "Next Gen AI Synchronization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
