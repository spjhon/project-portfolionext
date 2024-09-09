import { useTranslations } from "next-intl";
import React from "react";
//"I don't aim to reinvent the wheel, nor do I rely on copy-pasting. My passion lies in mastering the code, standards, and best practices that drive quality and innovation."


const MainSection: React.FC = () => {

  const t = useTranslations("HomePage");

  return (
    <div className="p-6">
      {/* Frase motivante */}
      <div className="text-3xl font-bold">
      {t("catchphrase")}
        <div className="w-16 border-b-2 border-highlight mt-2"></div>
      </div>

      

      {/* Imagen con texto flotante */}
      <div className="mt-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          className="float-left mr-6 mt-12 ml-12"
        />
        <p className="text-lg">
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
