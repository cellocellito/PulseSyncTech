import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import ChatWidget from "@/components/client/ChatWidget";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const localeMetadata: Record<string, Metadata> = {
  pt: {
    title: {
      default: "PulseSync - Automatize o Futuro da Sua Empresa",
      template: "%s | PulseSync",
    },
    description: "A Pulse Sync conecta sistemas, elimina tarefas manuais e acelera resultados com automações n8n inteligentes. Transforme sua empresa com automação de processos.",
    openGraph: {
      locale: "pt_BR",
      title: "PulseSync - Automatize o Futuro da Sua Empresa",
      description: "A Pulse Sync conecta sistemas, elimina tarefas manuais e acelera resultados com automações n8n inteligentes.",
    },
  },
  en: {
    title: {
      default: "PulseSync - Automate the Future of Your Company",
      template: "%s | PulseSync",
    },
    description: "Pulse Sync connects systems, eliminates manual tasks and accelerates results with intelligent n8n automations. Transform your company with process automation.",
    openGraph: {
      locale: "en_US",
      title: "PulseSync - Automate the Future of Your Company",
      description: "Pulse Sync connects systems, eliminates manual tasks and accelerates results with intelligent n8n automations.",
    },
  },
  es: {
    title: {
      default: "PulseSync - Automatiza el Futuro de tu Empresa",
      template: "%s | PulseSync",
    },
    description: "Pulse Sync conecta sistemas, elimina tareas manuales y acelera resultados con automatizaciones n8n inteligentes. Transforma tu empresa con automatización de procesos.",
    openGraph: {
      locale: "es_ES",
      title: "PulseSync - Automatiza el Futuro de tu Empresa",
      description: "Pulse Sync conecta sistemas, elimina tareas manuales y acelera resultados con automatizaciones n8n inteligentes.",
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseMetadata = localeMetadata[locale as keyof typeof localeMetadata] || localeMetadata.pt;

  const titleString = baseMetadata.title && typeof baseMetadata.title === 'object' && 'default' in baseMetadata.title
    ? baseMetadata.title.default
    : typeof baseMetadata.title === 'string'
    ? baseMetadata.title
    : 'PulseSync';

  return {
    ...baseMetadata,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pulsesync.tech"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'pt': '/pt',
        'en': '/en',
        'es': '/es',
      },
    },
    openGraph: {
      ...baseMetadata.openGraph,
      type: "website",
      url: `/${locale}`,
      siteName: "PulseSync",
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
      title: titleString,
      description: baseMetadata.description || undefined,
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
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const localeMap: Record<string, string> = {
    pt: 'pt-BR',
    en: 'en-US',
    es: 'es-ES',
  };

  return (
    <html lang={localeMap[locale] || 'pt-BR'} className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <ChatWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

