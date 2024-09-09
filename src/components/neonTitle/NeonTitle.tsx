import React from "react";
import styles from "./neonTitle.module.css";

const NeonTitle: React.FC = () => {
  return <h2 className={`absolute -top-11 right-0 ${styles.neonText}`}>Open all nite</h2>;
};

export default NeonTitle;
