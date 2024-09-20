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


  const closeIcon = (
   
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28px"
      height="28px"
      viewBox="0 0 24 24"
      fill="none"
      className="absolute top-5 right-5"
    >
      <path
        d="M8.00191 9.41621C7.61138 9.02569 7.61138 8.39252 8.00191 8.002C8.39243 7.61147 9.0256 7.61147 9.41612 8.002L12.0057 10.5916L14.5896 8.00771C14.9801 7.61719 15.6133 7.61719 16.0038 8.00771C16.3943 8.39824 16.3943 9.0314 16.0038 9.42193L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.004C15.6133 16.3945 14.9802 16.3945 14.5896 16.004L12.0057 13.42L9.42192 16.0038C9.03139 16.3943 8.39823 16.3943 8.00771 16.0038C7.61718 15.6133 7.61718 14.9801 8.00771 14.5896L10.5915 12.0058L8.00191 9.41621Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"
        fill="currentColor"
      />
    </svg>
    
  );

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
       closeIcon={closeIcon}
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
