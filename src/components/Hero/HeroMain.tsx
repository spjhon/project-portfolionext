import React from "react";
import NeonTitle from "../neonTitle/NeonTitle";
import { useTranslations } from "next-intl";

const HeroMain: React.FC = () => {
  const t = useTranslations("HeroMain");

  return (
    <div className="h-full p-5 lg:p-24 flex flex-col justify-center space-y-2">
      <p className="text-sm text-barra">{t("upperText")}</p>
      <div className="relative ">
        <NeonTitle></NeonTitle>
        <h1 className="text-2xl lg:text-4xl font-bold text-barra">JUAN ARISTIZABAL</h1>
      </div>
      <p className="text-sm text-barra">{t("subText")}</p>
      <div className="w-16 h-0.5 bg-highlight my-2"></div>
      <button className="px-4 py-2 bg-secondary text-white font-semibold rounded transform transition-transform duration-300 hover:scale-110">
      {t("button")}
      </button>
    </div>
  );
};

export default HeroMain;
