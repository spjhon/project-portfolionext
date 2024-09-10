import React, { useEffect, useState } from "react";
import styles from "./neonTitle.module.css";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";


const NeonTitle: React.FC = () => {

  const t = useTranslations("neonTitle");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // No renderizar nada hasta que el tema esté montado
    return null;
  }

  const showNeon = resolvedTheme === 'light' ? `invisible` : ""
  


  return <h2 className={`${showNeon} text-xl lg:text-4xl absolute -top-11 landscape:-top-44 right-0 ${styles.neonText}`}>{t("title")}</h2>;
};

export default NeonTitle;
