// types.ts

//Estos son los types utilizados en el codigo de Next Int
// These are the types used in the Next Intl code

//Sin embargo la mayoria de los types se encuentran en cada archivo
// However, most of the types are found in each file

export type Locale = 'es' | 'en' ; // Define aquí los idiomas que usarás

export interface PageParams {
  locale: Locale;
}