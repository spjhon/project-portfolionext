// ClientComponent.tsx
"use client";

//ESTE USE EFFECT ES NECESARIO POR QUE:

/*
Hay un conflicto entre next-themes y next-intl por lo que next-themes al menos con tailwind  por lo que next-themes debe de
estar en el layout mas externo de la app, entonces debido a que el html y el body quedan por fuera de locale por lo que no es posible
asignar el locale al lang del html, sin embargo chatGPT salio con una solucion bastante ingeniosa, utilizar el useEffect en el
layout que tiene accesso al locale y una vez cargado el componente, ejecutar el useEffect para cambiar el lang en tiempo de carga
de la pagina, funciona bien hasta ahora.
*/


import { useEffect } from "react";

export default function ClientComponent({ locale }: { locale: string }) {
  useEffect(() => {
    const previousLang = document.documentElement.lang;
    document.documentElement.lang = locale;

    return () => {
      document.documentElement.lang = previousLang;
    };
  }, [locale]);

  return null; // Este componente no necesita renderizar nada visible
}