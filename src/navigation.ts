import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {locales, /* ... */} from './config';
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, /* ... */});

  // Este es un codigo estandar extraido de los docs de Next Int para la creacion del link que sera
  // utilizado en el enrutamiento interno

  // This is a standard code extracted from the Next Intl docs for the creation of the link 
// that will be used for internal routing