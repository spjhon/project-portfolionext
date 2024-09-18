"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AtomicLogo() {
  const { resolvedTheme } = useTheme();
  const [fillColor, setFillColor] = useState("#e4e4f9"); // Valor predeterminado en caso de error
  const [isHovered, setIsHovered] = useState(false); // Estado para hover

  useEffect(() => {
    // Ajusta el color en función del tema
    if (resolvedTheme === "dark") {
      setFillColor(""); // Color para el tema oscuro
    } else {
      setFillColor("#023047"); // Color para el tema claro
    }
  }, [resolvedTheme]);

  return (
    <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="4.5rem"
      viewBox="0 0 90 90"
      width="4.5rem"
      onMouseEnter={() => setIsHovered(true)} // Activa el hover
      onMouseLeave={() => setIsHovered(false)} // Desactiva el hover
    >
      <path
        d="m41.687 0a41.687 41.687 0 0 0 -41.687 41.687 41.687 41.687 0 0 0 41.687 41.687 41.687 41.687 0 0 0 41.687-41.687 41.687 41.687 0 0 0 -41.687-41.687zm0 7.708a33.979 33.979 0 0 1 33.979 33.979 33.979 33.979 0 0 1 -33.98 33.979 33.979 33.979 0 0 1 -33.978-33.98 33.979 33.979 0 0 1 33.979-33.977z"
        strokeWidth=".632"
        fill={fillColor !== "" ? fillColor : "black"}
      />
      <g fill={fillColor !== "" ? fillColor : "#dc7e32"}> {/* Usa el color del estado o el color original basado en el hover */}
        <circle cx="12.583" cy="11.712" r="10.234" strokeWidth=".265" />
        <circle cx="41.687" cy="41.687" r="20.765" strokeWidth=".315" />
      </g>
    </svg>
    
    </>
  );
}