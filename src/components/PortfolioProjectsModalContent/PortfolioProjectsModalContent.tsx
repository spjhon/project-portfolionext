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


  const closeIcon = (
   
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28px"
      height="28px"
      viewBox="0 0 24 24"
      fill="none"
      className="absolute top-1.5 right-1.5"
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
        closeIcon={closeIcon}
        classNames={{
          modal: "rounded-xl opacity-1",
        }}
      >
        <div className="flex flex-col items-center space-y-4 p-6 dark:bg-gray-900">
          <div className="overflow-scroll w-full h-64 flex justify-center items-start bg-gray-200 dark:bg-gray-800">
            <Image
              src={modalProjectInfo.modalImage}
              width={500}
              height={500}
              alt="ScreenShot"
            />
          </div>

          <div className="flex flex-wrap justify-between w-full space-y-4 md:space-y-0 ">
            <div className="flex flex-col w-full md:w-1/2 space-y-2">
              <div className="text-lg font-bold">{t("projectInfoTitle")}</div>
              <a
                aria-label={"External Link"}
                href="https://spjhon.github.io/project-MALE/"
                target="_blank"
                rel="noopener noreferrer"
                title={`${t("projectWebsiteLink")} ${modalProjectInfo.label}`}
                className="px-4 py-2 w-1/2 bg-accent text-white font-semibold rounded transform transition-transform duration-300 hover:scale-110"
              >
                {t("projectWebsiteLink")}
                
              </a>
              <div className="text-sm text-gray-600 p-3">{t("projectInfo")}</div>
            </div>

            <div className="flex flex-col w-full md:w-1/2 space-y-2 ">
              <div className="text-lg font-bold">
                {t("projectTechnologiesTitle")}
              </div>
              <a
                aria-label={"External Link"}
                href="https://github.com/spjhon/project-MALE"
                target="_blank"
                rel="noopener noreferrer"
                title={`${t("projectGithubLink")} ${modalProjectInfo.label}`}
                className="px-4 py-2 w-1/2 bg-accent text-white font-semibold rounded transform transition-transform duration-300 hover:scale-110"
              >
                {t("projectGithubLink")}
              </a>

              <div className="text-sm text-gray-600 space-y-2 p-3">
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
