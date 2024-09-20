"use client";

// TheStack.tsx
import React, { useState } from "react";
import Image from "next/image";

//Imports for the modal from npm i react-responsive-modal
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

//Translation imports
import { useTranslations } from "next-intl";

interface ImageData {
  id: string;
  image: string; // Cambia src a JSX.Element para manejar componentes SVG
  label: string; // Agrega la propiedad label a la interfaz
  link: string;
  modalImage: string;
  jsonTranslationCategory: string;
}

interface TheStackProps {
  title: string;
  data: ImageData[];
}

const ProjectList: React.FC<TheStackProps> = ({ title, data }) => {

    const t = useTranslations("MALEPETinfo");

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <fieldset className="flex flex-col p-4 border-2 m-2 rounded-xl">
      <legend>{title}</legend>
      <div className="flex flex-wrap gap-4">
        {data.map((data) => (
            
          <div key={data.id}>
            <button
              aria-label={"Close Button"}
              onClick={onOpenModal}
              type="button"
              title={t("projectListTitle")}
              className="relative flex flex-col items-center hover:shadow-2xl transition-transform transform hover:translate-x-2 hover:-translate-y-1 hover:scale-105"
            >
              <Image
                src={data.image}
                width={100}
                height={100}
                alt="MALE Pet Care ScreenShot"
              />
              <span className="mt-2 text-center">{data.label}</span>
            </button>
            <Modal
              open={open}
              onClose={onCloseModal}
              center
              focusTrapped
              classNames={{
                modal: "rounded-xl",
              }}
            >
              <div className="flex flex-col items-center space-y-4 p-4 dark:bg-gray-900">
                <div className="overflow-scroll w-full h-64 flex justify-center items-start bg-gray-200 dark:bg-gray-800">
                  
                    <Image
                      src={data.modalImage}
                      width={500}
                      height={500}
                      alt="MALE Pet Care ScreenShot"
                    />
                  
                </div>

                <div className="flex flex-wrap justify-between w-full space-y-4 md:space-y-0 ">
                  <div className="flex flex-col w-full md:w-1/2 space-y-2">
                    <div className="text-lg font-bold">{t("projectInfoTitle")}</div>
                    <div className="text-sm text-gray-600">
                    {t("projectInfo")}
                    </div>
                  </div>

                  <div className="flex flex-col w-full md:w-1/2 space-y-2">
                    <div className="text-lg font-bold">{t("projectTechnologiesTitle")}</div>
                    <div className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer nec odio.
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default ProjectList;
