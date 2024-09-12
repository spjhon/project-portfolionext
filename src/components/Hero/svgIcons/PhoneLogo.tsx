"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function PhoneLogo() {
  const { resolvedTheme } = useTheme();
  const [fillColor, setFillColor] = useState("#e4e4f9"); // Valor predeterminado en caso de error

  useEffect(() => {
    // Ajusta el color en función del tema
    if (resolvedTheme === "dark") {
      setFillColor("#f2f2f2"); // Color para el tema oscuro
    } else {
      setFillColor("black"); // Color para el tema claro
    }
  }, [resolvedTheme]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path d="M6 2.524v19.952A1.524 1.524 0 0 0 7.524 24h9.952A1.524 1.524 0 0 0 19 22.476V2.524A1.524 1.524 0 0 0 17.476 1H7.524A1.524 1.524 0 0 0 6 2.524zm12 19.953a.524.524 0 0 1-.524.523H14v-1h-3v1H7.524A.524.524 0 0 1 7 22.477V21h11zM18 20H7V4h11zm-.524-18a.524.524 0 0 1 .524.523V3H7v-.477A.524.524 0 0 1 7.524 2z"
    stroke={fillColor}
    fill={fillColor}
    />
    <path fill="none" d="M0 0h24v24H0z"/></svg>
  );
}
