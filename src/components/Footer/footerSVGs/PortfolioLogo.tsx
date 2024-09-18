"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function PortfolioLogo() {
  const { resolvedTheme } = useTheme();
  const [fillColor, setFillColor] = useState("#e4e4f9"); // Valor predeterminado en caso de error

  useEffect(() => {
    // Ajusta el color en función del tema
    if (resolvedTheme === "dark") {
      setFillColor("#f2f2f2"); // Color para el tema oscuro
    } else {
      setFillColor("#023047"); // Color para el tema claro
    }
  }, [resolvedTheme]);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill={fillColor}
        height="5rem"
        width="5rem"
        version="1.1"
        id="Icons"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
      >
        <g>
          <path d="M26,9h-2.6c-1.2-3-4.1-5-7.4-5c-3.3,0-6.2,2-7.4,5H6c-1.7,0-3,1.3-3,3v0.6C3,16.1,5.9,19,9.4,19h13.3   c3.5,0,6.4-2.9,6.4-6.4V12C29,10.3,27.7,9,26,9z M16,6c2.2,0,4.1,1.2,5.2,3H10.8C11.9,7.2,13.8,6,16,6z" />
          <path d="M23,21C23,21,23,21,23,21l0,2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2H11v2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0,0,0,0,0,0   c-2.4-0.1-4.5-1.2-6-2.9V25c0,1.7,1.3,3,3,3h20c1.7,0,3-1.3,3-3v-6.9C27.5,19.8,25.4,20.9,23,21z" />
        </g>
      </svg>
    </>
  );
}
