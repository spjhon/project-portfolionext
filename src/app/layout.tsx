// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL('https://project-portfolionext.pages.dev/'),
    title: "Juan Portfolio",
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
    openGraph: {
      title: 'Juan Portfolio - Web Developer',
      description: "Next Js Portfolio",
      url: 'https://project-portfolionext.pages.dev/',
      type: 'website',
      siteName: 'Juan Portfolio',
      images: ['https://project-portfolionext.pages.dev/opengraph-image.jpg'],
    },
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.

//OJO, toco poner el themeProvider y en html debido a un problema con la compatibilidad entre next-themes y next-int
// NOTE, I had to place the themeProvider in the html due to a compatibility issue between next-themes and next-intl
export default function RootLayout({ children }: Props) {
  return (
    
    <html lang="en" suppressHydrationWarning>
        {/* suppressHydrationWarning viene de next themes */}
        {/* suppressHydrationWarning comes from next themes */}

      <head>
        {/* Imagenes pre-cargadas para evitar el flasheo durante el cambio de estas imagenes en sus respectivos componentes */}
        {/*  Preloaded images to prevent flashing during the image change in their respective components */}
        <link rel="preload" href="/heroBackgrounds/hero01.jpg" as="image" />
        <link rel="preload" href="/heroBackgrounds/hero02.jpg" as="image" />
        <link rel="preload" href="/heroBackgrounds/hero03.jpg" as="image" />
        <link rel="preload" href="/heroBackgrounds/hero01Night.jpg" as="image" />
        <link rel="preload" href="/heroBackgrounds/hero02Night.jpg" as="image" />
        <link rel="preload" href="/heroBackgrounds/hero03Night.jpg" as="image" />
        
        
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
