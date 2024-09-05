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
      
    },
  },
  plugins: [],
};
export default config;
