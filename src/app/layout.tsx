import type { Metadata } from "next";
import { Inter, Playfair_Display, Sora } from "next/font/google";
import "./globals.css";

import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ['normal', 'italic']
});
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

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
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${playfair.variable} ${sora.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
