
import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="w-[50px] h-[50px] bg-warning text-black dark:text-white dark:bg-accent">
      {t('title')}
    </div>
  );
}


