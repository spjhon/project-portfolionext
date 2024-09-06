//Importaciones normales de next js
// Standard Next.js imports for the layout
import type { Metadata } from "next";
import { Inter } from "next/font/google";

//Importaciones de componentes
// Component imports
import { Container } from "@/components/Container";
import { Navbar } from "@/components/NavBar/Navbar";
import ClientComponent from "@/components/ClientComponent";

//Importaciones de next internazionalization
// Next internationalization imports
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {getTranslations} from 'next-intl/server';

//PARA STATIC RENDERING de NEXT INTERNATIONALIZATION
// FOR STATIC RENDERING of NEXT INTERNATIONALIZATION
// Can be imported from a shared config
import { locales } from "@/config";
import { unstable_setRequestLocale } from "next-intl/server";


export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

//Manejo de fonts que viene desde create-next-app
// Font management that comes from create-next-app
const inter = Inter({ subsets: ["latin"] });



//NEXT JS METADATA
// Genera metadata dinámica basada en el locale
export async function generateMetadata({ params: { locale } }: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'MainLayout' });
  return {
    title: "Juan Portfolio",
    description: t('description'),

    // Otros metadatos
    generator: 'Next.js',
    applicationName: 'Web Developer Portfolio',
    referrer: 'origin-when-cross-origin',
    keywords: [],
    authors: [{ name: 'Camilo' }, { name: 'Aristizabal', url: 'https://nextjs.org' }],
    creator: 'Camilo Aristizabal',
    publisher: 'Camilo Dev',
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    openGraph: {
      title: 'Juan Portfolio',
      description: t('description'),
      locale: locale,
      type: 'website',
      images: [
        {
          url: '/openGraph.webp',
          alt: 'Juan Portfolio',
        }
      ],
    },
    robots: {
      index: true,
      follow: true,
      noarchive: false,
      nosnippet: false,
      notranslate: false,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MalePet Care',
      description: t('description'),
      site: '@MalePetCare',
      creator: '@CamiloAristizabal',
      images: ['/openGraph.webp'],
    },
    category: 'Desarrollo Web',
    
  };
}

//El async es parte de next int
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <ClientComponent locale={locale}></ClientComponent>
      <Container className="bg-barra dark:bg-gradient-to-r from-black to-slate-800 h-screen max-w-[31592px] max-h-[1750px]">
        <div className="relative h-full">
         

          <div className="absolute w-full h-full grid grid-rows-[1fr_1rem_2fr] landscape:grid-cols-[1fr_4rem_1fr] landscape:grid-rows-none">
              
            <div></div>
            <div className="bg-barra dark:bg-accent"></div>
            <div className="flex justify-center items-start">
            <Navbar />
            </div>
          </div>


          {children}


        </div>
      </Container>
    </NextIntlClientProvider>
  );
}
