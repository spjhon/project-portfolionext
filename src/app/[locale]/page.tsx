import { useTranslations } from "next-intl";
import { PageParams } from "../../types";
import Hero from "@/components/Hero/Hero";


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
      
      <div className="rounded-xl  text-black dark:text-white bg-MUESTRA bg-cover bg-center">
        <div className="z-10 mt-32 w-3">
        {t("title")}
        </div>
        
      </div>
    </div>
  );
}
