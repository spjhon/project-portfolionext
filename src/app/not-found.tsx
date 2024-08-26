"use client";

import cavernicola from "../../public/dribbble_1.gif";
import Image from "next/image";
import styles from "./notFound.module.css";

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <Image src={cavernicola} alt="cavernicola"></Image>
        </div>
        <h1 className={styles.notFound}>
          Page Not Found / Pagina No Encontrada
        </h1>
      </body>
    </html>
  );
}
