import React from "react";
import PortfolioLogo from "./footerSVGs/PortfolioLogo";

// Translation imports
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("FooterComponent");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6">
      <div className="container mx-auto flex  flex-wrap gap-1">
        {/* Sección de "About this Portfolio" */}
        <a
            href="https://www.google.com"
            className="hover:underline hover:shadow-xl font-bold flex flex-col items-center justify-center flex-1 mx-auto p-8"
            aria-label="About this Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
         
          
            About this Portfolio
          
          <PortfolioLogo />
        
        </a>

        {/* Sección de contactos */}
        <section className="hover:shadow-xl flex flex-col items-center justify-center flex-1 mx-auto p-8" aria-labelledby="contact-heading">
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
        <p>© {currentYear} Hecho con amor por Juan Aristizabal</p>
      </div>
    </footer>
  );
};

export default Footer;