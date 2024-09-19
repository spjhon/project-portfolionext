import React from "react";
import GithubAboutPortfolioLogo from "./AboutPortfolioSVG/GithubAboutPortfolioLogo";
import { useTranslations } from "next-intl";

const AboutPortfolioModalContent = () => {

    const t = useTranslations("AboutPortfolioModalContent");
    
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-barra dark:bg-accent text-accent dark:text-barra">
      {/* Logo y texto de Github */}
      <a
        href="https://github.com/spjhon/project-portfolionext"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex justify-center gap-3 items-center bg-gray-200 dark:bg-accent p-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
      >
        <GithubAboutPortfolioLogo />
        <span className="text-lg font-bold tracking-wide">Source Code</span>
      </a>

      {/* Contenido del modal */}
      <div className="flex flex-wrap justify-between w-full space-y-4 md:space-y-0">
        {/* Sección "Acerca de" */}
        <div className="flex flex-col w-full md:w-1/2 space-y-2">
          <div className="text-lg font-bold text-accent dark:text-barra">
          {t("aboutPortfolioTitleModal")}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
          {t("portfolioDescription")}
          </div>
        </div>

        {/* Sección "Tecnologías Utilizadas" */}
        <div className="flex flex-col w-full md:w-1/2 space-y-2">
          <div className="text-lg font-bold text-accent dark:text-barra">
          {t("aboutTechnologies")}
          </div>
          <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
            <li>Next.js (static mode)</li>
            <li>Tailwind CSS</li>
            <li>Typescript</li>
            <li>Next-Themes</li>
            <li>Next-Intl</li>
            <li>CLX</li>
            <li>React</li>
            <li>React-intersection-observer</li>
            <li>React-responsive-modal</li>
            <li>Headlessui/react</li>
            <li>Cloudflare</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPortfolioModalContent;