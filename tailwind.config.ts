import type { Config } from "tailwindcss";

const config: Config = {
  //mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        barra: '#f2f2f2',
        primary: '#8ecae6',
        secondary: '#219ebc',
        accent: '#023047',
        highlight: '#ffb703',
        warning: '#fb8500',
      },
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
        'landscape': {'raw': '(orientation: landscape)'},
      },
      backgroundImage: { //Imagenes para el hero, las rutas no pueden ser relativas
        'hero01': "url('/heroBackgrounds/hero01.jpg')",
        'hero01Dark': "url('/heroBackgrounds/hero01Night.jpg')",
        'hero02': "url('/heroBackgrounds/hero02.jpg')",
        'hero02Dark': "url('/heroBackgrounds/hero02Night.jpg')",
        'MUESTRA': "url('/heroBackgrounds/MUESTRA.jpg')",
        
      }
    },
  },
  plugins: [],
};
export default config;
