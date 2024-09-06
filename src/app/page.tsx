// app/page.tsx

import {redirect} from 'next/navigation';

//Esta es una redicreccion para poder que se carguen las pages que estan dentro de [locale]
// This is a redirection to load the pages that are inside [locale]

export default function RootPage() {
  redirect('/en');
}