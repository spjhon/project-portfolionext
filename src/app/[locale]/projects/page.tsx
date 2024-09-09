import { useTranslations } from "next-intl";
import { PageParams } from "../../../types";

interface HomePageProps {
  params: PageParams;
}

//PARA STATIC RENDERING
import { unstable_setRequestLocale } from "next-intl/server";

export default function Projects({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("AboutPage");
  return (
    <div className="w-[50px] h-[50px] bg-warning text-black dark:text-white dark:bg-accent">
      {t("title")}
    </div>
  );
}
