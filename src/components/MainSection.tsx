import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import mainImage01 from "../../public/mainImage01.webp";
import programerImage from "../../public/programer.webp";
//"I don't aim to reinvent the wheel, nor do I rely on copy-pasting. My passion lies in mastering the code, standards, and best practices that drive quality and innovation."

const MainSection: React.FC = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="p-6">
      {/* Frase motivante */}
      <div className="text-4xl font-bold">
        {t("catchphrase")}
        <div className="w-16 border-b-2 border-highlight mt-2"></div>
      </div>

      <div className="pt-8 pb-8 lg:pt-16 lg:pb-16">
        <div className="relative mx-auto w-[14rem] h-[3.25rem] lg:w-[28rem] lg:h-[6.5rem]">
          {/* Card content */}
          <div className="z-30 relative bg-[#96a399] dark:bg-transparent rounded-lg w-[14rem] h-[3.25rem] lg:w-[28rem] lg:h-[6.5rem]">
            <Image
              src={mainImage01}
              width={1350}
              height={318}
              alt="Picture of the author"
              className=""
            />
          </div>
          {/* Light blur shadow */}
          <div className="absolute top-6 left-4 bg-[#27201d8f] dark:bg-transparent rounded-lg blur-sm z-20 w-[14rem] h-[3.25rem] lg:w-[28rem] lg:h-[6.5rem]"></div>
          {/* Heavy blur shadow */}
          <div className="absolute top-8 left-8 bg-[#2e36378a] dark:bg-transparent rounded-lg blur-lg z-10 w-[14rem] h-[3.25rem] lg:w-[28rem] lg:h-[6.5rem]"></div>
        </div>
      </div>

      {/* Imagen con texto flotante */}
      <div className="mt-6">
        <div className="float-left mr-8 mb-6">
          <div className="relative mx-auto w-[8rem] h-[10rem]">
            {/* Card content */}
            <div className="z-30 relative bg-[#96a399] dark:bg-transparent rounded-lg w-[8rem] h-[10rem]">
              <Image
                src={programerImage}
                width={750}
                height={1000}
                alt="Picture of the author"
                className=""
              />
            </div>
            {/* Light blur shadow */}
            <div className="absolute top-6 left-4 bg-[#27201d8f] dark:bg-transparent rounded-lg blur-sm z-20 w-[8rem] h-[10rem]"></div>
            {/* Heavy blur shadow */}
            <div className="absolute top-8 left-8 bg-[#2e36378a] dark:bg-transparent rounded-lg blur-lg z-10 w-[8rem] h-[10rem]"></div>
          </div>
        </div>
        <p className="text-lg pl-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Divs de contacto y proyectos */}
      <div className="flex justify-between mt-12">
        <div className="w-1/2 h-32 flex items-center justify-center border">
          <h2 className="text-xl font-semibold">Contacto</h2>
        </div>
        <div className="w-1/2 h-32 flex items-center justify-center border">
          <h2 className="text-xl font-semibold">Proyectos</h2>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
