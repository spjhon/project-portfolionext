import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import mainImage01 from "../../public/mainImage01.webp";
import programerImage from "../../public/programer.webp";
//"I don't aim to reinvent the wheel, nor do I rely on copy-pasting. My passion lies in mastering the code, standards, and best practices that drive quality and innovation."

const MainSection: React.FC = () => {
  const t = useTranslations("MainSection");

  return (
    <section aria-label="Main_introduction_section" className="p-1 lg:p-6">
      {/* Frase motivante */}

      <h2 className="text-4xl font-bold">{t("catchphrase")}</h2>

      <div
        aria-hidden="true"
        className="w-16 border-b-2 border-highlight mt-2"
      ></div>

      <div aria-hidden="true" role="img" className="pt-8 pb-8 lg:pt-16 lg:pb-16">
        <div className="relative mx-auto w-[14rem] h-[3.25rem] lg:w-[28rem] lg:h-[6.5rem]">
          {/* Card content */}
          <div className="z-30 relative bg-barra dark:bg-transparent rounded-lg w-[14rem] h-[3.25rem] lg:w-[28rem] lg:h-[6.5rem]">
            <Image
              src={mainImage01}
              width={1350}
              height={318}
              alt="Picture of the author"
              className=""
            />
          </div>
          {/* Light blur shadow */}
          <div
            aria-hidden="true"
            className="absolute top-6 left-4 bg-[#27201d8f] dark:bg-transparent rounded-lg blur-sm z-20 w-[14rem] h-[3.25rem] lg:w-[28rem] lg:h-[6.5rem]"
          ></div>
          {/* Heavy blur shadow */}
          <div
            aria-hidden="true"
            className="absolute top-8 left-8 bg-[#2e36378a] dark:bg-transparent rounded-lg blur-lg z-10 w-[14rem] h-[3.25rem] lg:w-[28rem] lg:h-[6.5rem]"
          ></div>
        </div>
      </div>

      {/* Imagen con texto flotante */}
      <div className="mt-6">
        <div className="float-left mr-8 mb-6">
          <div className="relative mx-auto w-[8rem] h-[10rem]">
            {/* Card content */}
            <div className="z-30 relative bg-[#96a399] dark:bg-transparent rounded-lg w-[8rem] h-[10rem]">
              <Image
               role="img"
                src={programerImage}
                width={750}
                height={1000}
                alt="Picture of the author"
                className=""
                title="Programer Image"
              />
            </div>
            {/* Light blur shadow */}
            <div
              aria-hidden="true"
              className="absolute top-6 left-4 bg-[#27201d8f] dark:bg-transparent rounded-lg blur-sm z-20 w-[8rem] h-[10rem]"
            ></div>
            {/* Heavy blur shadow */}
            <div
              aria-hidden="true"
              className="absolute top-8 left-8 bg-[#2e36378a] dark:bg-transparent rounded-lg blur-lg z-10 w-[8rem] h-[10rem]"
            ></div>
          </div>
        </div>
        <p className="text-lg p-1 lg:p-10">{t("introduction01")}</p>
        <p className="text-lg p-1 lg:p-10">{t("introduction02")}</p>
      </div>
    </section>
  );
};

export default MainSection;
