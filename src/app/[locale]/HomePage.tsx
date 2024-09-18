//Este useClient es necesario debido al useState
"use client";
import { useEffect, useState } from "react";

//Translation imports
import { useTranslations } from "next-intl";

//intersection observer in order to have animations
import { useInView } from "react-intersection-observer";

//component imports
import Hero from "@/components/Hero/Hero";
import HeroMain from "@/components/Hero/HeroMain";
import HeroStack from "@/components/Hero/HeroStack";
import MainSection from "@/components/MainSection";
import HeroEducation from "@/components/Hero/HeroEducation";
import { SectionTitle } from "@/components/SectionTitle";
import TheStack from "@/components/TheStack/TheStack";
import EducationTimeline from "@/components/EducationTimeline/EducationTimeline";
import ExperienceTimeline from "@/components/EducationTimeline/ExperienceTimeline";
import Footer from "@/components/Footer/Footer";

//image that goes to the section title
import SectionStackSVG from "../../components/TheStack/svgStack/SectionSVG/SectionStackSVG";
import SectioinEducationSVG from "@/components/TheStack/svgStack/SectionSVG/SectionEducationSVG";

//Svg imports that goes to the stack component
import {
  frameworksSVG,
  languagesSVG,
  libraries,
  philosofiesSVG,
  toolsSVG,
} from "../../components/TheStack/data";

//Data for the timelines
import {
  educationData,
  experienceData,
} from "../../components/EducationTimeline/data";





// Define props types for animated components
interface DataItem {
  id: number;
}

interface AnimatedComponentProps {
  setComponentToShow?: (component: string) => void;
  children?: React.ReactNode;
  educationData?: DataItem[];
  experienceData?: DataItem[];
}

interface HomePageProps {
  locale: string; // Define el tipo para `locale`
}





export default function HomePage({ locale }: HomePageProps) {
  const t = useTranslations("HomePage");



  //this state controlls when a component its in view and update the div of the left of the homepage
  const [componentToShow, setComponentToShow] = useState<string>("Main");

  let componentToRender;
  let imageToRender;

  switch (componentToShow) {
    case "Main":
      componentToRender = <HeroAnimated />;
      imageToRender = {
        backgroundImage: "/heroBackgrounds/hero01.webp",
        backgroundImageDark: "/heroBackgrounds/hero01Night.webp",
      };
      break;
    case "Stack":
      componentToRender = <HeroStackAnimated />;
      imageToRender = {
        backgroundImage: "/heroBackgrounds/hero02.webp",
        backgroundImageDark: "/heroBackgrounds/hero02Night.webp",
      };
      break;
    case "Education":
      componentToRender = <HeroEducationAnimated />;
      imageToRender = {
        backgroundImage: "/heroBackgrounds/hero03.webp",
        backgroundImageDark: "/heroBackgrounds/hero03Night.webp",
      };

      break;
    default:
      // Opcional: maneja el caso por defecto
      componentToRender = null; // o cualquier componente por defecto
      imageToRender = {
        backgroundImage: "black",
        backgroundImageDark: "black", // Agrega backgroundImageDark para consistencia
      };
      break;



  }



  return (
    <div className="w-full h-full grid grid-rows-[1fr_2rem_2fr] landscape:grid-cols-[1fr_4rem_1.5fr] landscape:grid-rows-none">
      
      <section className="overflow-hidden ">
        <Hero imageToRender={imageToRender}>{componentToRender}</Hero>
      </section>

      <div></div>

      <main className="rounded-xl overflow-scroll">
        <div className="relative mt-10 w-full lg:pt-16 pr-1 pl-2 lg:pr-24 lg:pl-24">
          <MainSectionAnimated setComponentToShow={setComponentToShow} />

          <SectionTitle
            preTitle={t("sectionTitlePreTitle")}
            title={t("sectionTitleCatchPhrase")}
            icon={<SectionStackSVG></SectionStackSVG>}
          >
            {t("sectionTitleSubtext")}
          </SectionTitle>

          <TheStack01Animated />
          <TheStack02Animated setComponentToShow={setComponentToShow} />
          <TheStack03Animated />
          <TheStack04Animated />
          <TheStack05Animated />

          <SectionTitle
            preTitle={t("sectionTitlePreTitleEducation")}
            title={t("sectionTitleCatchPhraseEducation")}
            icon={<SectioinEducationSVG></SectioinEducationSVG>}
          >
            {t("sectionTitleSubtextEducation")}
          </SectionTitle>

          <TimeLineAnimated
            setComponentToShow={setComponentToShow}
            educationData={educationData}
            experienceData={experienceData}
          />

          <p className="text-lg p-1 lg:p-10">{t("finalSentence")}</p>

          <Footer />
        </div>
      </main>
    </div>
  );
}







//this code from now on till the end its only for animations using react-intersection-observer

const MainSectionAnimated: React.FC<AnimatedComponentProps> = ({
  setComponentToShow,
}) => {
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

const TheStack02Animated: React.FC<AnimatedComponentProps> = ({
  setComponentToShow,
}) => {
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

const TimeLineAnimated: React.FC<AnimatedComponentProps> = ({
  setComponentToShow,
  educationData = [],
  experienceData = [],
}) => {
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
      <EducationTimeline side="right" title="Educación" data={educationData} />
      <ExperienceTimeline side="left" title="Experiencia" data={experienceData} />
    </div>
  );
};

const HeroAnimated: React.FC<AnimatedComponentProps> = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`w-full transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <HeroMain />
    </div>
  );
};

const HeroStackAnimated: React.FC<AnimatedComponentProps> = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`w-full transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <HeroStack />
    </div>
  );
};

const HeroEducationAnimated: React.FC<AnimatedComponentProps> = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`w-full transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <HeroEducation />
    </div>
  );
};
