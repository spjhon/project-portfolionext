"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SectionStackSVG() {
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
      width="4rem"
      height="4rem"
      viewBox="0 0 16 16"
    >
      <path
        d="M0 10l8 4 8-4v2l-8 4-8-4v-2zm0-4l8 4 8-4v2l-8 4-8-4V6zm8-6l8 4-8 4-8-4 8-4z"
        fillRule="evenodd"
      />
    </svg>
  );
}
