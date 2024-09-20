import React from "react";
import NeonTitle from "../neonTitle/NeonTitle";
import { useTranslations } from "next-intl";


const HeroProjects: React.FC = () => {
  //Transtale imports
  const t = useTranslations("HeroProjects");

  return (
    <section className="h-full p-5 lg:p-24 flex flex-col justify-center space-y-2">
      <p className="text-sm text-barra">{t("upperText")}</p>
      <header className="relative ">
        
        <h1 className="text-2xl lg:text-4xl font-bold text-barra">
        {t("mainText")}
        </h1>
      </header>
      <p className="text-sm text-barra">{t("subText")}</p>
      <div className="w-16 h-0.5 bg-highlight my-2"></div>
      
    </section>
  );
};

export default HeroProjects;
