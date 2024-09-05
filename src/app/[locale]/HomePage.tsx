"use client";

import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";
import Hero from "@/components/Hero/Hero";
import HeroMain from "@/components/Hero/HeroMain";
import HeroStack from "@/components/Hero/HeroStack";
import MainSection from "@/components/MainSection";
import HeroEducation from "@/components/Hero/HeroEducation";
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
import EducationTimeline from "@/components/EducationTimeline/EducationTimeline";
import Footer from "@/components/Footer/Footer";

// Define props types for animated components
interface AnimatedComponentProps {
  setComponentToShow?: (component: string) => void;
}

interface HomePageProps {
  locale: string;
}

export default function HomePage({ locale }: HomePageProps) {
  const t = useTranslations("HomePage");

  const [componentToShow, setComponentToShow] = useState<string>("Main");

  let componentToRender;

switch (componentToShow) {
  case "Main":
    componentToRender = <HeroMain />;
    break;
  case "Stack":
    componentToRender = <HeroStack />;
    break;
  case "Education":
    componentToRender = <HeroEducation />;
    break;
  default:
    // Opcional: maneja el caso por defecto
    componentToRender = null; // o cualquier componente por defecto
    break;
}

  return (
    <div className="w-full h-full grid grid-rows-[1fr_1rem_2fr] landscape:grid-cols-[1fr_4rem_1fr] landscape:grid-rows-none">
      <div className="overflow-hidden">
        <Hero>{componentToRender}</Hero>
      </div>

      <div></div>

      <div className="rounded-xl text-black dark:text-white overflow-scroll">
        <div className="relative mt-32 w-full">
          <MainSectionAnimated setComponentToShow={setComponentToShow} />

          <SectionTitle
            preTitle="MY STACK"
            title="Herramientas Modernas Para Problemas Modernos"
            icon={SectionTitle01.src}
          >
            Un stack altamente adaptable a las necesidades de velocidad, buena
            experiencia de desarrollo y mantenibilidad
          </SectionTitle>

          <TheStack01Animated />
          <TheStack02Animated setComponentToShow={setComponentToShow}/>
          <TheStack03Animated />
          <TheStack04Animated />
          <TheStack05Animated  />

          <SectionTitle
            preTitle="MY EDUCATION"
            title="High quality skills"
            icon={SectionTitle01.src}
          >
            Mi título de ingeniería industrial, un complemento perfecto para la
            materialización de apps complejas desde el punto de vista de la
            gestión de proyectos
          </SectionTitle>

          <EducationAnimated setComponentToShow={setComponentToShow}/>

          <Footer />
        </div>
      </div>
    </div>
  );
}

const MainSectionAnimated: React.FC<AnimatedComponentProps> = ({ setComponentToShow }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && setComponentToShow) {
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
      <MainSection />
    </div>
  );
};

const TheStack01Animated: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <TheStack images={frameworksSVG} title="FrameWorks" />
    </div>
  );
};

const TheStack02Animated: React.FC<AnimatedComponentProps> = ({ setComponentToShow }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && setComponentToShow) {
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
      <TheStack images={libraries} title="Libraries" />
    </div>
  );
};

const TheStack03Animated: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <TheStack images={languagesSVG} title="Languages" />
    </div>
  );
};

const TheStack04Animated: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <TheStack images={toolsSVG} title="Tools" />
    </div>
  );
};

const TheStack05Animated: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <TheStack images={philosofiesSVG} title="Philosophies" />
    </div>
  );
};

const EducationAnimated: React.FC<AnimatedComponentProps> = ({ setComponentToShow }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && setComponentToShow) {
      setComponentToShow("Education");
    }
  }, [inView, setComponentToShow]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <EducationTimeline side="right" title="Educación" />
      <EducationTimeline side="left" title="Experiencia" />
    </div>
  );
};