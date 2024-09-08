//Importaciones normales de next js
// Standard Next.js imports for the layout
import { Inter } from "next/font/google";

//Css imports
//Css importaciones
import styles from "./gridAnimation.module.css"

//Importaciones de componentes
// Component imports
import { Container } from "@/components/Container";
import { Navbar } from "@/components/NavBar/Navbar";
import ClientComponent from "@/components/ClientComponent";
import LinkBar from "@/components/LinkBar/LinkBar";

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
    
    description: t('description'),

    // Otros metadatos
  
    canonical: 'https://project-portfolionext.pages.dev/',

    openGraph: {
      title: 'Juan Portfolio - Web Developer',
      description: t('description'),
      url: 'https://project-portfolionext.pages.dev/',
      type: 'website',
      site_name: 'Juan Portfolio',
      images: ['https://project-portfolionext.pages.dev/opengraph-image.jpg'],
    },

    twitter: {
      card: 'summary_large_image',
      title: 'Juan Portfolio - Web Developer',
      description: t('description'),
      site: 'https://project-portfolionext.pages.dev/',
      creator: '@CamiloAristizabal',
      images: ['https://project-portfolionext.pages.dev/opengraph-image.jpg'],
      image: {
        alt: 'Web Developer',
      },
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

  //FOR STATIC RENDERING
  unstable_setRequestLocale(locale);

  // Providing all messages to the client side is the easiest way to get started,
  // this comes form next int
  const messages = await getMessages();

//COMENTARIO SOBRE EL LAYOUT
/*
Este layout utiliza una estructura adaptable a cualquier tamaño de pantalla (viewport) gracias a la combinación de CSS Grid y posicionamiento absoluto.

El diseño principal consiste en tres divisores (`divs`): uno en la izquierda, otro en la derecha y uno central. La disposición de estos se adapta dinámicamente, de modo que los divs laterales ocupan el espacio disponible a los lados del div central, que tiene un ancho fijo de 1rem. 

En pantallas con orientación horizontal (landscape), los divs se distribuyen en tres columnas (izquierda, centro y derecha), mientras que en pantallas más verticales (portrait), los divs se organizan en tres filas. El div central sirve como una barra delimitadora o separador, con el div superior (o izquierdo, dependiendo de la orientación) reservado para el contenido auxiliar y el inferior (o derecho) para la navegación.

Finalmente, los elementos `children` se colocan con posicionamiento absoluto sobre esta cuadrícula, permitiendo la superposición necesaria para crear efectos visuales complejos. Esto asegura que el contenido flote o se ajuste sobre el layout base sin afectar la estructura subyacente.
*/

//COMMENT ABOUT THE LAYOUT
/*
This layout uses a structure that adapts to any screen size (viewport) by combining CSS Grid and absolute positioning.

The main design consists of three divs: one on the left, one on the right, and a central one. These divs dynamically adjust so that the side divs occupy the remaining space, while the central div maintains a fixed width of 1rem.

In horizontally-oriented (landscape) screens, the divs are arranged in three columns (left, center, and right), while in more vertical (portrait) screens, they are organized into three rows. The central div acts as a separator bar, with the upper (or left, depending on orientation) div reserved for auxiliary content and the lower (or right) div for navigation.

Finally, the `children` elements are placed with absolute positioning over this grid, allowing the necessary overlay to create complex visual effects. This ensures that the content floats or adjusts over the base layout without affecting the underlying structure.
*/

  return (
    <NextIntlClientProvider messages={messages}>
      <ClientComponent locale={locale}></ClientComponent>
      <Container className="bg-barra dark:bg-gradient-to-r from-black  to-slate-800 h-screen max-w-[2592px] max-h-[1750px]">
        <div className="relative h-full text-gray-800 dark:text-white ">
         

        <div className={`absolute w-full h-full grid grid-rows-[1fr_2rem_2fr] landscape:grid-cols-[1fr_4rem_1fr] landscape:grid-rows-none ${styles.grid}`}>
              
            <div></div>

            <div className="bg-barra shadow-xl z-10 relative dark:bg-transparent">
            <LinkBar></LinkBar>
            </div>

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
