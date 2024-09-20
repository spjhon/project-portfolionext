import MALEscreenShot from "../../../../public/projects/image.webp"
import ModalMALEscreenShot from "../../../../public/projects/malepetScreenshot.png"

import MALEscreenShot2 from "../../../../public/logomintic.png"


export const landingPages = [
    {
      id: "1",
      jsonTranslationCategory: "MALEPETinfo",
      image: MALEscreenShot.src, // Asegúrate de tener estas imágenes en la carpeta public de Next.js
      label: "MALE Pet Care",
      link: "https://spjhon.github.io/project-MALE/",
      modalImage: MALEscreenShot2.src
    },
    {
        id: "2",
        jsonTranslationCategory: "MALEPETinfo",
        image: MALEscreenShot.src, // Asegúrate de tener estas imágenes en la carpeta public de Next.js
        label: "otro label",
        link: "https://spjhon.github.io/project-MALE/",
        modalImage: ModalMALEscreenShot.src
      },
  ];