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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Page not found / Página no encontrada en este sitio." />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
        <title>Not Found / No Encontrado</title>
      </head>
      <body>
        <div className={styles.container}>
          <Image className={styles.picture} src={cavernicola} alt="Cavernicola" />
        </div>
        <h1 className={styles.notFound}>Page Not Found / Página No Encontrada</h1>
      </body>
    </html>
  );
}
