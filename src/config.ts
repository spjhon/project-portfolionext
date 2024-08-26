// A list of all locales that are supported

import {LocalePrefix} from 'next-intl/routing';
 
export const localePrefix = 'always' satisfies LocalePrefix;
export const locales = ['en', 'es'] as const;
export const defaultLocale = 'en' as const;