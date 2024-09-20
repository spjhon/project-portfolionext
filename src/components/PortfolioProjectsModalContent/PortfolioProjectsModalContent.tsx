"use client";

// TheStack.tsx
import React, { useState } from "react";
import Image from "next/image";

// Imports for the modal from npm i react-responsive-modal
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

// Translation imports
import { useTranslations } from "next-intl";

//Import of shared types
import { ImageData } from "../ProjectsList/ProjectsList";

interface PortfolioProjectsModalContentProps {
  modalProjectInfo: ImageData;
}

const PortfolioProjectsModalContent: React.FC<
  PortfolioProjectsModalContentProps
> = ({ modalProjectInfo }) => {
  const t = useTranslations(`${modalProjectInfo.jsonTranslationCategory}`);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <button
        aria-label={"Open Modal"}
        onClick={onOpenModal}
        type="button"
        title={t("projectListTitle")}
        className="relative flex flex-col items-center hover:shadow-2xl transition-transform transform hover:translate-x-2 hover:-translate-y-1 hover:scale-105"
      >
        <Image
          src={modalProjectInfo.image}
          width={100}
          height={100}
          alt="MALE Pet Care ScreenShot"
        />
        <span className="mt-2 text-center">{modalProjectInfo.label}</span>
      </button>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: "rounded-xl opacity-1",
        }}
      >
        <div className="flex flex-col items-center space-y-4 p-4 dark:bg-gray-900">
          <div className="overflow-scroll w-full h-64 flex justify-center items-start bg-gray-200 dark:bg-gray-800">
            <Image
              src={modalProjectInfo.modalImage}
              width={500}
              height={500}
              alt="MALE Pet Care ScreenShot"
            />
          </div>

          <div className="flex flex-wrap justify-between w-full space-y-4 md:space-y-0 ">
            <div className="flex flex-col w-full md:w-1/2 space-y-2">
              <div className="text-lg font-bold">{t("projectInfoTitle")}</div>
              <div className="text-sm text-gray-600">{t("projectInfo")}</div>
            </div>

            <div className="flex flex-col w-full md:w-1/2 space-y-2">
              <div className="text-lg font-bold">
                {t("projectTechnologiesTitle")}
              </div>
              <div className="text-sm text-gray-600 space-y-2">
                
                <ul className="list-disc list-inside space-y-1">
                  {modalProjectInfo.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PortfolioProjectsModalContent;
