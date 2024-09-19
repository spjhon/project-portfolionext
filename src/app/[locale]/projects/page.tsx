"use client";

//Translation imports
import { useTranslations } from "next-intl";
import { PageParams } from "../../../types";

interface ProjectProps {
  params: PageParams;
}

//PARA STATIC RENDERING
import { unstable_setRequestLocale } from "next-intl/server";
import Footer from "@/components/Footer/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import Hero from "@/components/Hero/Hero";

//image that goes to the section title
import SectionProjectSVG from "./SVG/SectionProjectsSVG";

export default function Projects({ params: { locale } }: ProjectProps) {
  //FOR STATIC GENERATION FORM NEXT INT

  const t = useTranslations("projectsPage");

  let imageToRender = {
    backgroundImage: "/heroBackgroundProjects/hero01.jpg",
    backgroundImageDark: "/heroBackgroundProjects/hero01Night.jpg", // Agrega backgroundImageDark para consistencia
  };

  return (
    <div className="w-full h-full grid grid-rows-[1fr_2rem_2fr] landscape:grid-cols-[1fr_4rem_1.5fr] landscape:grid-rows-none">
      <section className="overflow-hidden ">
        <Hero imageToRender={imageToRender}>TEXTO</Hero>
      </section>

      <div />

      <main className="rounded-xl overflow-scroll">
        <div className="relative mt-16 w-full lg:pt-8 pr-1 pl-2 lg:pr-24 lg:pl-24">
          <SectionTitle
            preTitle={t("sectionTitlePreTitle")}
            title={t("sectionTitleCatchPhrase")}
            icon={<SectionProjectSVG></SectionProjectSVG>}
          >
            {t("sectionTitleSubtext")}
          </SectionTitle>

          <p className="text-lg p-1 lg:p-10 italic font-semibold text-gray-700 dark:text-gray-300 border-l-4 border-warning  pl-4">
            {t("finalSentence")}
          </p>

          <Footer />
        </div>
      </main>
    </div>
  );
}
