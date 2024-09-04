"use client"

import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";

import Hero from "@/components/Hero/Hero";
import HeroMain from "@/components/Hero/HeroMain";
import HeroStack from "@/components/Hero/HeroStack";
import MainSection from "@/components/MainSection";
import { SectionTitle } from "@/components/SectionTitle";
import SectionTitle01 from "../../../public/SectionsImages/SectionImage01Sized.png";
import {
  frameworksSVG,
  languagesSVG,
  libraries,
  philosofiesSVG,
  toolsSVG,
} from "../../components/TheStack/data";
import TheStack from "@/components/TheStack/TheStack";
import { useEffect, useState } from "react";
interface HomePageProps {
  locale: string;
}

//PARA STATIC RENDERING

import EducationTimeline from "@/components/EducationTimeline/EducationTimeline";
import Footer from "@/components/Footer/Footer";


export default function HomePage({ locale }: HomePageProps) {
  
  const t = useTranslations("HomePage");


const [componentToShow, setComponentToShow] = useState("Main")



let componentToRender;
  if (componentToShow === "Main") {
    componentToRender = <HeroMain />;
  } else if (componentToShow === "Stack") {
    componentToRender = <HeroStack />;
  }

  return (
    <div className="w-full h-full grid grid-rows-[1fr_1rem_2fr] landscape:grid-cols-[1fr_4rem_1fr] landscape:grid-rows-none">
      <div className="overflow-hidden">
        <Hero>
        {componentToRender}
        </Hero>
      </div>

      <div></div>

      <div className="rounded-xl  text-black dark:text-white overflow-scroll">
        <div className="relative mt-32 w-full">

          <MainSectionAnimated setComponentToShow={setComponentToShow} />

          <SectionTitle
            preTitle="MY STACK"
            title="Herramientas Modernas Para Problemas Modernos"
            icon={SectionTitle01.src}
          >
            Un stack altamene adaptable a las necesidades de velocidad, buena
            experiencia de desarrollo y mantgenibilidad
          </SectionTitle>

          <TheStack01Animated ></TheStack01Animated>
          <TheStack02Animated></TheStack02Animated>
          <TheStack03Animated></TheStack03Animated>
          <TheStack04Animated></TheStack04Animated>
          <TheStack05Animated setComponentToShow={setComponentToShow}></TheStack05Animated>

          <SectionTitle
            preTitle="MY EDUCATION"
            title="High quality skills"
            icon={SectionTitle01.src}
          >
            My titulo de ingeniria industrial un complemento perfecto para la
            materializacion de app complejas desde el punto de vista de la
            gestion de proyectos
          </SectionTitle>

          <EducationTimeline side="right" title="Educacion"></EducationTimeline>
          <EducationTimeline
            side="left"
            title="Experiencia"
          ></EducationTimeline>

          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}


//para las animaciones a mano con intersection observer
const MainSectionAnimated = ({setComponentToShow}) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Ajusta el umbral según tus necesidades
    triggerOnce: false, // Dispara la animación solo una vez
  });

  
  useEffect(() => {
    if (inView) {
      setComponentToShow("Main");
    }
  }, [inView, setComponentToShow]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {<MainSection />}
    </div>
  );
};

//para las animaciones a mano con intersection observer
const TheStack01Animated = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Ajusta el umbral según tus necesidades
    triggerOnce: true, // Dispara la animación solo una vez
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {<TheStack images={frameworksSVG} title="FrameWorks"></TheStack>}
    </div>
  );
};

//para las animaciones a mano con intersection observer
const TheStack02Animated = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Ajusta el umbral según tus necesidades
    triggerOnce: true, // Dispara la animación solo una vez
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {<TheStack images={libraries} title="Libraries"></TheStack>}
    </div>
  );
};

//para las animaciones a mano con intersection observer
const TheStack03Animated = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Ajusta el umbral según tus necesidades
    triggerOnce: true, // Dispara la animación solo una vez
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {<TheStack images={languagesSVG} title="Languages"></TheStack>}
    </div>
  );
};

//para las animaciones a mano con intersection observer
const TheStack04Animated = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Ajusta el umbral según tus necesidades
    triggerOnce: true, // Dispara la animación solo una vez
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {<TheStack images={toolsSVG} title="Tools"></TheStack>}
    </div>
  );
};

//para las animaciones a mano con intersection observer
const TheStack05Animated = ({setComponentToShow}) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Ajusta el umbral según tus necesidades
    triggerOnce: false, // Dispara la animación solo una vez
  });

  useEffect(() => {
    if (inView) {
      setComponentToShow("Stack");
    }
  }, [inView, setComponentToShow]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {<TheStack images={philosofiesSVG} title="Philosofies"></TheStack>}
    </div>
  );
};