import React from "react";
import { useTranslations } from "next-intl";

// Definimos el tipo de los elementos dentro del array `data`
interface EducationItem {
  id: number;
}

// Definimos los tipos de las props que recibe el componente
interface EducationTimelineProps {
  side?: "left" | "right";
  title?: string;
  data: EducationItem[];
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({
  side = "left",
  title,
  data,
}) => {
  const t = useTranslations("EducationTimeline");

  const isLeft = side === "left";

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <div
        className={`relative ${isLeft ? "border-l-4" : "border-r-4"} border-gray-200`}
      >
        {data.map((item) => {
          return (
            <article
            aria-labelledby={`timeline-item-${item.id}`}
              key={item.id}
              className={`mb-8 ${isLeft ? "pl-8" : "pr-8"} relative ${isLeft ? "text-left" : "text-right"}`}
            >
              <div
                className={`absolute w-6 h-6 bg-blue-500 rounded-full mt-1.5 ${isLeft ? "-left-3" : "-right-3"} border-4 border-white`}
              ></div>
              <p className="text-gray-600 text-sm">{t(`year${item.id}`)}</p>
              <h3 className="text-xl font-semibold">
                {t(`education${item.id}`)}
              </h3>
              <p className="text-gray-500">{t(`institute${item.id}`)}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default EducationTimeline;
