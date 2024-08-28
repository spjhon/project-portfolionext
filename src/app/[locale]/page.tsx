import { useTranslations } from "next-intl";
import { PageParams } from "../../types";

interface HomePageProps {
  params: PageParams;
}

//PARA STATIC RENDERING
import { unstable_setRequestLocale } from "next-intl/server";

export default function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("HomePage");
  return (
    <div className="w-full h-full grid grid-rows-[1fr_5rem_1fr] md:grid-cols-[1fr_5rem_1fr] md:grid-rows-none">
      <div className="z-10 bg-warning text-black dark:text-white dark:bg-secondary">
        {t("title")}
      </div>
      <div className=" bg-warning text-black dark:text-white dark:bg-secondary">
        {t("title")}
      </div>
      <div className=" bg-warning text-black dark:text-white dark:bg-secondary">
        <div className="relative mt-32 z-10">
        {t("title")}
        </div>
        
      </div>
    </div>
  );
}
