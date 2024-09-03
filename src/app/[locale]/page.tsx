import { useTranslations } from "next-intl";
import { PageParams } from "../../types";
import Hero from "@/components/Hero/Hero";
import MainSection from "@/components/MainSection";
import { SectionTitle } from "@/components/SectionTitle";
import SectionTitle01 from "../../../public/SectionsImages/SectionImage01Sized.png"
import {images} from "../../components/TheStack/data"
import TheStack from "@/components/TheStack/TheStack";

interface HomePageProps {
  params: PageParams;
}

//PARA STATIC RENDERING
import { unstable_setRequestLocale } from "next-intl/server";

export default function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("HomePage");
  return (

    <div className="w-full h-full grid grid-rows-[1fr_1rem_2fr] landscape:grid-cols-[1fr_4rem_1fr] landscape:grid-rows-none">
      
      <div>
        <Hero>
        {t("title")}
        </Hero>
      </div>
      
      <div></div>
      
      <div className="rounded-xl  text-black dark:text-white overflow-scroll">
        <div className="relative mt-32 w-full">
        <MainSection />
        <SectionTitle
        preTitle="MY STACK"
        title="Herramientas Modernas Para Problemas Modernos"
        icon={SectionTitle01.src}
      >
        Un stack altamene adaptable a las necesidades de velocidad, buena experiencia de desarrollo y mantgenibilidad
      </SectionTitle>
      <TheStack images={images} title="FrameWorks" ></TheStack>
        </div>
        
      </div>
    </div>
  );
}
