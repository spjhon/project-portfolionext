import React, { useState } from "react";
import NeonTitle from "../neonTitle/NeonTitle";
import { useTranslations } from "next-intl";
import CopyClipboard from "../CopyClipboard.tsx/CopyClipboard";

//Imports for the modal from npm i react-responsive-modal
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const HeroMain: React.FC = () => {
  //Transtale imports
  const t = useTranslations("HeroMain");

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="h-full p-5 lg:p-24 flex flex-col justify-center space-y-2">
      <p className="text-sm text-barra">{t("upperText")}</p>
      <div className="relative ">
        <NeonTitle></NeonTitle>
        <h1 className="text-2xl lg:text-4xl font-bold text-barra">
          JUAN ARISTIZABAL
        </h1>
      </div>
      <p className="text-sm text-barra">{t("subText")}</p>
      <div className="w-16 h-0.5 bg-highlight my-2"></div>
      <div className="mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
        <button
          onClick={onOpenModal}
          type="button"
          className="px-4 py-2 bg-secondary text-white font-semibold rounded transform transition-transform duration-300 hover:scale-110"
        >
          {t("button")}
        </button>
        <Modal open={open} onClose={onCloseModal} center>
          <h2>Simple centered modal</h2>
          <CopyClipboard></CopyClipboard>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default HeroMain;
