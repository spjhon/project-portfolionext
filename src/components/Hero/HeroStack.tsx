import React, { useState } from "react";

import { useTranslations } from "next-intl";
import CopyClipboard from "../CopyClipboard/CopyClipboard";
import { infoToCopy } from "./data";

//Imports for the modal from npm i react-responsive-modal
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const HeroStack: React.FC = () => {
  //Transtale imports
  const t = useTranslations("HeroStack");

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="h-full p-5 lg:p-24 flex flex-col justify-center space-y-2">
      <p className="text-sm text-barra">{t("upperText")}</p>
      <div className="relative ">
        <h1 className="text-2xl lg:text-4xl font-bold text-barra">
          {t("mainText")}
        </h1>
      </div>
      <p className="text-sm text-barra">{t("subText")}</p>
      <div className="w-16 h-0.5 bg-highlight my-2"></div>
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

export default HeroStack;
