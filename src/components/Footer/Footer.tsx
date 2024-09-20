import React, { useState } from "react";

//component imports
import AboutPortfolioModalContent from "../AboutPortfolioModalContent/AboutPortfolioModalContent";

//svg imports
import PortfolioLogo from "./footerSVGs/PortfolioLogo";

// Translation imports
import { useTranslations } from "next-intl";

//Imports for the modal from npm i react-responsive-modal
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Footer = () => {
  const t = useTranslations("FooterComponent");
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6">
      <div className="container mx-auto flex  flex-wrap gap-1">
        {/* Sección de "About this Portfolio" */}
        <button
          aria-label={"Close Button"}
          onClick={onOpenModal}
          type="button"
          className="hover:underline hover:shadow-xl font-bold flex flex-col items-center justify-center flex-1 mx-auto p-8"
        >
          <span>{t("aboutPortfolio")}</span>

          <PortfolioLogo />
        </button>
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          closeIcon={closeIcon}
          focusTrapped
          classNames={{
            modal: "rounded-xl",
          }}
        >
          <AboutPortfolioModalContent></AboutPortfolioModalContent>
        </Modal>

        {/* Sección de contactos */}
        <section
          className="hover:shadow-xl flex flex-col items-center justify-center flex-1 mx-auto p-8"
          aria-labelledby="contact-heading"
        >
          <h3 id="contact-heading" className="font-semibold mb-2">
            {t("contactTitle")}
          </h3>
          <address className="not-italic">
            <ul className="space-y-2">
              <li>
                <span>Email:&nbsp;</span>
                <a
                  href="mailto:spjhon@gmail.com"
                  className="hover:underline font-bold"
                  aria-label="Send Email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  spjhon@gmail.com
                </a>
              </li>
              <li>
                <span>{t("phone")}&nbsp;</span>
                <a
                  href="tel:+573215224583"
                  className="hover:underline font-bold"
                  aria-label="Call to phone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (+57) 3215224583
                </a>
              </li>
              <li>
                <span>{t("city")}&nbsp;</span>
                <a
                  href="https://maps.app.goo.gl/t1p73WF8B5RPkGUb7"
                  className="hover:underline font-bold"
                  aria-label="City of Origin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manizales, Colombia
                </a>
              </li>
            </ul>
          </address>
        </section>
      </div>

      {/* Texto final */}
      <div className="text-center mt-6">
        <p>© {currentYear} Juan Aristizabal</p>
      </div>
    </footer>
  );
};

export default Footer;
