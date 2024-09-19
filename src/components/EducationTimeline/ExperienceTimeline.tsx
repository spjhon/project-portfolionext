import React from "react";
import { useTranslations } from "next-intl";

// Definimos el tipo de los elementos dentro del array `data`
interface EducationItem {
  id: number;
}

// Definimos los tipos de las props que recibe el componente
interface EducationTimelineProps {
  side?: "left" | "right";
  data: EducationItem[];
}

const ExperienceTimeline: React.FC<EducationTimelineProps> = ({
  side = "left",
  data,
}) => {
  const t = useTranslations("ExperienceTimeline");

  const isLeft = side === "left";

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">{t("mainTitle")}</h2>
      <div
        className={`relative ${isLeft ? "border-l-4" : "border-r-4"} border-gray-200`}
      >
        {data.map((item) => {
          return (
            <article
              
              key={item.id}
              className={`mb-8 ${isLeft ? "pl-8" : "pr-8"} relative ${isLeft ? "text-left" : "text-right"}`}
            >
              <div
                className={`absolute w-6 h-6 bg-blue-500 rounded-full mt-1.5 ${isLeft ? "-left-3" : "-right-3"} border-4 border-white`}
              ></div>
              <p className="text-gray-600 text-sm">{t(`year${item.id}`)}</p>
              <h3 className="text-xl font-semibold">{t(`role${item.id}`)}</h3>
              <p className="text-gray-500">{t(`enterprise${item.id}`)}</p>
              <p className="text-gray-500"> {t(`job${item.id}`)}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
