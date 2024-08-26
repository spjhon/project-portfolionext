"use client";

import { usePathname, useRouter } from "../../navigation";
import { Locale } from "../../../types";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (locale: Locale) => {
    // Cambia el idioma, manteniendo la misma ruta
    router.replace(pathname, { locale: locale });
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("es")}>Español</button>
    </div>
  );
}
