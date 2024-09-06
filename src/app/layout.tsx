// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.

//OJO, toco poner el themeProvider y en html debido a un problema con la compatibilidad entre next-themes y next-int
// NOTE, I had to place the themeProvider in the html due to a compatibility issue between next-themes and next-intl
export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
