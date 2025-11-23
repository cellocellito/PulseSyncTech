import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "PulseSync - Automatize o Futuro da Sua Empresa",
    template: "%s | PulseSync",
  },
  description: "A Pulse Sync conecta sistemas, elimina tarefas manuais e acelera resultados com automações n8n inteligentes. Transforme sua empresa com automação de processos.",
  keywords: [
    "automação",
    "n8n",
    "integração de sistemas",
    "automação de processos",
    "workflow automation",
    "automação empresarial",
    "integração de dados",
    "PulseSync",
    "automação inteligente",
  ],
  authors: [{ name: "PulseSync" }],
  creator: "PulseSync",
  publisher: "PulseSync",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pulsesync.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "PulseSync",
    title: "PulseSync - Automatize o Futuro da Sua Empresa",
    description: "A Pulse Sync conecta sistemas, elimina tarefas manuais e acelera resultados com automações n8n inteligentes.",
    images: [
      {
        url: "/Logo%20Pulse%20Sync%20TRANSPARENTE.png",
        width: 1200,
        height: 630,
        alt: "PulseSync - Automação Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseSync - Automatize o Futuro da Sua Empresa",
    description: "A Pulse Sync conecta sistemas, elimina tarefas manuais e acelera resultados com automações n8n inteligentes.",
    images: ["/Logo%20Pulse%20Sync%20TRANSPARENTE.png"],
    creator: "@pulsesync",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/Logo%20Pulse%20Sync%20TRANSPARENTE.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/Logo%20Pulse%20Sync%20TRANSPARENTE.png",
    apple: "/Logo%20Pulse%20Sync%20TRANSPARENTE.png",
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
