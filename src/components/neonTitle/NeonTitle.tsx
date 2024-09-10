import React, { useEffect, useState } from "react";
import styles from "./neonTitle.module.css";
import { useTheme } from "next-themes";

const NeonTitle: React.FC = () => {


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
  


  return <h2 className={`${showNeon} absolute -top-11 right-0 ${styles.neonText}`}>Open all nite</h2>;
};

export default NeonTitle;
