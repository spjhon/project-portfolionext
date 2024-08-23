import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import ThemeChanger from "@/components/DarkSwitch/DarkSwitch";
import Header from '@/components/Header/Header'

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';


//PARA STATIC RENDERING
// Can be imported from a shared config
import {unstable_setRequestLocale} from 'next-intl/server';
const locales = ['en', 'es'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {

  // Providing all messages to the client
  // side is the easiest way to get started
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider attribute="class" defaultTheme="dark">
        <Header />
          <div>{children}</div>
          <ThemeChanger></ThemeChanger>
        </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

/*
este es es codigo solo para la configuracion de tailwind y next-themes, mas arriba esta ya con internazionalizacion
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div>{children}</div>
          <ThemeChanger></ThemeChanger>
        </ThemeProvider>
      </body>
    </html>
  );
}
  */
