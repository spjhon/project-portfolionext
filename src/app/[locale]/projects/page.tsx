"use client";

//Translation imports
import { useTranslations } from "next-intl";
import { PageParams } from "../../../types";

interface ProjectProps {
  params: PageParams;
}

//Components imports
import Footer from "@/components/Footer/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import Hero from "@/components/Hero/Hero";
import ProjectsList from "@/components/ProjectsList/ProjectsList";
import HeroProjects from "@/components/Hero/HeroProjects";

//Data of projects imports
import {landingPages} from "./dataProjects"

//image that goes to the section title
import SectionProjectSVG from "./SVG/SectionProjectsSVG";



export default function Projects({ params: { locale } }: ProjectProps) {
  
  const t = useTranslations("projectsPage");

  let imageToRender = {
    backgroundImage: "/heroBackgroundProjects/hero01.jpg",
    backgroundImageDark: "/heroBackgroundProjects/hero01Night.jpg", // Agrega backgroundImageDark para consistencia
  };

  return (
    <div className="w-full h-full grid grid-rows-[1fr_2rem_2fr] landscape:grid-cols-[1fr_4rem_1.5fr] landscape:grid-rows-none">
      <section className="overflow-hidden ">
        <Hero imageToRender={imageToRender}><HeroProjects></HeroProjects></Hero>
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

          <ProjectsList modalProjectArray={landingPages} title="Landing Pages" />
          
          <p className="text-lg p-1 lg:p-10 italic font-semibold text-gray-700 dark:text-gray-300 border-l-4 border-warning  pl-4">
            {t("finalSentence")}
          </p>

          <Footer />
        </div>
      </main>
    </div>
  );
}
