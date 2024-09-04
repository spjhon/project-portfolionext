// src/app/[locale]/LocaleWrapper.tsx
import { unstable_setRequestLocale } from "next-intl/server";
import HomePage from "./HomePage";

export default function LocaleWrapper({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <HomePage locale={locale} />;
}




/*

Correcto, el `LocaleWrapper` no se importa directamente en ningún otro lugar. En su lugar, debe estar en el lugar adecuado en la estructura de tu proyecto para que Next.js lo utilice automáticamente para manejar la localización.

Aquí te explico cómo se integra `LocaleWrapper` en la estructura de tu aplicación Next.js:

### Estructura del Proyecto

En Next.js, la estructura de archivos y carpetas determina cómo se renderizan las páginas. Aquí tienes cómo deberías organizar los archivos para que `LocaleWrapper` funcione correctamente:

1. **Directorio de Páginas Dinámicas:**

   Si estás utilizando rutas dinámicas para manejar diferentes locales, tu directorio de rutas debería parecerse a esto:

   ```
   src/
   └── app/
       └── [locale]/
           ├── page.tsx       // Tu Client Component (HomePage)
           └── LocaleWrapper.tsx // Tu Server Component
   ```

2. **Uso de `LocaleWrapper`:**

   `LocaleWrapper` debe ser el componente que maneje la lógica del servidor y envuelva el componente que necesita el `locale`. Debes exportar `LocaleWrapper` como la página principal en lugar de `HomePage`. Así que, `page.tsx` se convierte en el punto de entrada para Next.js, y en él debes utilizar `LocaleWrapper`.

   ```typescript
   // src/app/[locale]/page.tsx
   import LocaleWrapper from "./LocaleWrapper";

   export default function Page({ params }: { params: { locale: string } }) {
     return <LocaleWrapper params={params} />;
   }
   ```

   En este archivo, `Page` recibe `params` que contienen el `locale` y lo pasa a `LocaleWrapper`, que maneja la configuración del `locale` y luego renderiza `HomePage`.

3. **`LocaleWrapper` Maneja el `locale`:**

   `LocaleWrapper` es un componente Server que se encarga de configurar el `locale` antes de renderizar el componente principal.

   ```typescript
   // src/app/[locale]/LocaleWrapper.tsx
   import { unstable_setRequestLocale } from "next-intl/server";
   import HomePage from "./page";

   export default function LocaleWrapper({ params: { locale } }: { params: { locale: string } }) {
     unstable_setRequestLocale(locale);
     return <HomePage locale={locale} />;
   }
   ```

   Aquí, `LocaleWrapper` configura el `locale` y renderiza el `HomePage` con el `locale` como una prop.

### Resumen:

- **`page.tsx`**: Punto de entrada para Next.js, se encarga de pasar los parámetros necesarios a `LocaleWrapper`.
- **`LocaleWrapper.tsx`**: Configura el `locale` y renderiza `HomePage`.
- **`HomePage.tsx`**: El Client Component que maneja la lógica y el estado del cliente.

De esta forma, Next.js usa `LocaleWrapper` para manejar la configuración del `locale` de manera adecuada antes de renderizar el componente del cliente.


*/