import React, { useState } from "react";
import UdemyLogo from "./svgIcons/UdemyLogo";
import UnalLogo from "../../../public/logounal.png";
import MinTicLogo from "../../../public/logomintic.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

//Imports for the modal from npm i react-responsive-modal
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import CopyClipboard from "../CopyClipboard/CopyClipboard";
import { infoToCopy } from "./data";

const HeroEducation: React.FC = () => {
  const isLandscape = window.innerWidth > window.innerHeight; // Detecta si está en modo landscape
  //Transtale imports
  const t = useTranslations("HeroEducation");

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="h-full p-5 lg:p-24 flex flex-col justify-center space-y-2">
      <p className="text-sm text-barra">{t("upperText")}</p>

      <h1 className="text-2xl lg:text-4xl font-bold text-barra">
        {t("mainText")}
      </h1>

      <p className="text-sm text-barra">{t("subText")}</p>
      <div className="w-16 h-0.5 bg-highlight my-2"></div>

      {/* Contenedor de imágenes */}
      {isLandscape && (
        <div className="flex space-x-4 mt-4">
          <a
            href="https://udemy.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Logo of the Udemy Online Platform"
            title="Go to the Udemy website"
          >
            <div className="w-16 h-6 flex justify items-center hover:shadow transition-transform duration-300 transform hover:scale-105">
              <UdemyLogo></UdemyLogo>
            </div>
          </a>

          <div className="w-16 h-6 flex justify items-center hover:shadow transition-transform duration-300 transform hover:scale-105">
            <a
              href="https://unal.edu.co"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Logo of the National University of Colombia"
              title="Go to the National University of Colombia website"
            >
              <Image
                src={UnalLogo}
                width={100}
                height={100}
                alt="Logo of the National University of Colombia"
                priority
              />
            </a>
          </div>

          <div className="w-16 h-6 flex justify items-center hover:shadow transition-transform duration-300 transform hover:scale-105">
            <a
              href="https://www.mintic.gov.co/portal/inicio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Logo of the Technology of Information of Colombia"
              title="Go to the Minisrty of Information of Colombia"
            >
              <Image src={MinTicLogo} width={100} height={100} alt="MinTic" />
            </a>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-sm rounded-lg overflow shadow-lg bg-gray-800 hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
        <button
          aria-label={"Close Button"}
          onClick={onOpenModal}
          type="button"
          className="px-4 py-2 bg-accent text-white font-semibold rounded transform transition-transform duration-300 hover:scale-110"
        >
          {t("button")}
        </button>

        <Modal
          open={open}
          onClose={onCloseModal}
          center
          focusTrapped
          aria-labelledby="Contact modal"
          aria-describedby="Here you can find email and phone number of the developer "
          classNames={{
            modal: "rounded-xl",
          }}
        >
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
              {t("HeroMainModalTitle")}
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
              {t("HeroMainModalSubText")}
            </p>

            <div className="space-y-4">
              <CopyClipboard infoToCopy={infoToCopy[0]} />

              <CopyClipboard infoToCopy={infoToCopy[1]} />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default HeroEducation;
