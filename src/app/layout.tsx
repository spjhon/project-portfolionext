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
    description: "Next Js Portfolio",
    
    // Otros metadatos
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
    
    generator: 'Next.js',
    applicationName: 'Web Developer Portfolio',
    referrer: 'origin-when-cross-origin',
    keywords: [  'Front-End Developer', 'Web Development', 'Next.js', 'React', 'JavaScript', 
      'TypeScript', 'HTML', 'CSS', 'SCSS', 'Tailwind CSS', 'Responsive Design', 
      'Web Design', 'User Interface', 'UI/UX', 'SEO', 'JavaScript Frameworks', 
      'Single Page Applications', 'Progressive Web Apps', 'API Integration', 
      'Git', 'Version Control', 'Web Performance', 'Accessibility', 'Cross-Browser Compatibility', 
      'Web Animations', 'CSS Grid', 'Flexbox', 'Mobile-First Design', 'Node.js', 'SSR', 
      'Static Site Generation', 'JAMstack', 'Webpack', 'Babel', 'ES6', 'Code Optimization', 
      'JavaScript Libraries', 'NPM', 'REST APIs', 'JSON', 'GraphQL', 'WebSockets', 
      'Figma', 'Adobe XD', 'Vercel', 'GitHub', 'Web Developer Tools', 'Testing', 'Cypress', 
      'Jest', 'Portfolio', 
      '@headlessui/react', 'clsx', 'eslint', 'eslint-plugin-import', 'eslint-plugin-react', 
      'eslint-plugin-tailwindcss', 'next-intl', 'next-themes', 'react-dom', 
      'react-intersection-observer', 'sharp', '@types/node', '@types/react', 
      '@types/react-dom', 'eslint-config-molindo', 'eslint-config-next', 'postcss', 
      'tailwindcss', 'typescript', 'Next.js 14', 'React 18', 'Intersection Observer', 
      'Headless UI', 'ESLint', 'PostCSS', 'Sharp Image Processing'],
    authors: [{ name: 'Camilo' }, { name: 'Aristizabal', url: 'https://nextjs.org' }],
    creator: 'Camilo Aristizabal',
    publisher: 'Camilo Dev',
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    
    openGraph: {
      title: 'Juan Portfolio - Web Developer',
      description: "Next Js Portfolio",
      url: 'https://project-portfolionext.pages.dev/',
      type: 'website',
      siteName: 'Juan Portfolio',
      images: ['https://project-portfolionext.pages.dev/opengraph-image.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Juan Portfolio - Web Developer',
      description: "Next Js Portfolio",
      site: 'https://project-portfolionext.pages.dev/',
      creator: '@CamiloAristizabal',
      images: ['https://project-portfolionext.pages.dev/opengraph-image.jpg'],
      
    },
    category: 'Desarrollo Web',
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
