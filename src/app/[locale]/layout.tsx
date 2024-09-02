//Importaciones normales de next js
import type { Metadata } from "next";
import { Inter } from "next/font/google";

//Importaciones de componentes
import { Container } from "@/components/Container";
import { Navbar } from "@/components/NavBar/Navbar";
import ClientComponent from "@/components/ClientComponent";

//Importaciones de next internazionalization
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

//PARA STATIC RENDERING de NEXT INTERNATIONALIZATION
// Can be imported from a shared config
import { locales } from "@/config";
import { unstable_setRequestLocale } from "next-intl/server";
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

//Manejo de fonts que viene desde create-react-app
const inter = Inter({ subsets: ["latin"] });

//La metadata de NEXT JS
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
            <div>
            <Navbar />
            </div>
          </div>


          {children}


        </div>
      </Container>
    </NextIntlClientProvider>
  );
}
