"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./darkswitch.module.css";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI, THIS COMES FROM THE DOCS OF NEXT THEMES
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // El componente es relativamente sencillo, se renderiza uno de dos svgs que utlizan el resolvedTheme para saber en que theme estan
  //y asi poder renderizar o el sol o la luna, en la luna hay dos divs que tiene un efecto glow con un css perzonalizado por medio de css modules

  // The component is relatively simple; it renders one of two SVGs that use resolvedTheme to determine which theme is active
  // and thus render either the sun or the moon. In the moon, there are two divs that have a glow effect using custom CSS via CSS Modules.
  return (
    <div className="flex items-center">
      {resolvedTheme === "dark" ? (
        <button
          type="button"
          onClick={() => setTheme("light")}
          className="rounded-full relative group"
        >
          <span className="sr-only">Light Mode</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="group-hover"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>

          {/* Efecto de brillo, bright effect */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div
              className={`absolute inset-0 rounded-full blur-xl bg-highlight opacity-100 ${styles.glow}`}
            ></div>
            <div
              className={`absolute inset-0 rounded-full blur-3xl bg-highlight opacity-80 ${styles.glow}`}
            ></div>
          </div>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className="rounded-full"
        >
          <span className="sr-only">Dark Mode</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#ffb703"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
