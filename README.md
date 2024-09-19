# Personal Portfolio

![Image](/public/screencapture.png)

Completely static page built with Next.js using `output: 'export'`.

Created from scratch (without templates), with a clear and maintainable structure.

Any feedback or code changes are welcome.

## Features

- Fully Responsive
- Multi-Language
- Next.js 14 Static Rendering
- Light and Dark Theme
- SEO Optimized
- Optimized for High Load Speed

Tested on [PageSpeed Insights](https://pagespeed.web.dev/)

![Image](/public/screencapturespeedinsight.png)

Tested on [HTML Validator](https://validator.w3.org/)

## Libraries Used

- Next.js (static mode)
- Tailwind CSS
- TypeScript
- Next-Themes
- Next-Intl
- CLX
- React
- React-intersection-observer
- React-responsive-modal
- Headlessui/react
- Cloudflare

## How to Use

1. Clone this repository

    `git clone https://github.com/spjhon/project-portfolionext.git`

2. Install dependencies

`npm install`

To run in developer mode on localHost:3000: `npm run dev`

To build the static page ready to host on any server: `npm run build`

## Code Comments

There are comments throughout the code aiming to explain the purpose of each component or decision made.

The website's foundation is built on Next.js, Tailwind, Next-Themes, and Next-Intl. Interestingly, there's a conflict between Next-Themes and Next-Intl, particularly when using Tailwind. Therefore, Next-Themes must be placed in the outermost layout of the app. As a result, the HTML and body elements are outside the locale scope, making it impossible to assign the locale to the HTML `lang` attribute. However, ChatGPT came up with a clever solution: using `useEffect` in the layout that has access to the locale, and once the component is loaded, the `useEffect` hook can change the `lang` attribute during page load. So far, it works well.

As for Next-Intl, shared routes are used according to its documentation.

## Deployments

### Render Deployment

[Render Deployment](https://camiloportfolio-nosc.onrender.com)

### Cloudflare Pages Deployment

[Cloudflare Deployment](project-portfolionext.pages.dev)

# Personal Portfolio

![Imagen](/public/screencapture.png)

Pagina completamente estatica construida con Nextjs utilizando `output: 'export'`.

Creada desde 0 (sin plantillas), con una estructura clara y mantenible.

Cualquier comentario o cambio de codigo es bienvenido.

## Caracteristicas

- Totalmente Responsiva
- Multi-Lenguaje
- Next js 14 Renderizado Estatico
- Tema Claro y Oscuro
- CEO optimizada
- Optimizada para una alta velocidad de carga

Testeada en [PageSpeed Insights](https://pagespeed.web.dev/)

![Imagen](/public/screencapturespeedinsight.png)

Testeada en [HTML validator](https://validator.w3.org/)

## Librerias Utilizadas

- Next.js (static mode)
- Tailwind CSS
- Typescript
- Next-Themes
- Next-Intl
- CLX
- React
- React-intersection-observer
- React-responsive-modal
- Headlessui/react
- Cloudflare

## Como usar

1. Clonar este repositorio

    `git clone https://github.com/spjhon/project-portfolionext.git`

2. Instalar dependencias

`npm install`

Para ejecutar modo desarrollador en localHost:3000: `npm run dev`

Para construir la pagina estatica lista para hostear en cualquier servidor: `npm run build`

## Comentarios sobre el codigo

Hay comentarios a lo largo del codigo intentando explicar para que sirve cada componente o descicion tomada.

La base del sitio web se sienta sobre nextJs, tailwind, next-themes y next-intl. Interesantemente Hay un conflicto entre next-themes y next-intl por lo que next-themes al menos con tailwind  por lo que next-themes debe de estar en el layout mas externo de la app, entonces debido a que el html y el body quedan por fuera de locale por lo que no es posible asignar el locale al lang del html, sin embargo chatGPT salio con una solucion bastante ingeniosa, utilizar el useEffect en el layout que tiene accesso al locale y una vez cargado el componente, ejecutar el useEffect para cambiar el lang en tiempo de carga de la pagina, funciona bien hasta ahora.

En cuanto a next-intl se utiliza las rutas compartidas de acuerdo a su documentacion.

## Deployments

### Deploy en Render

[Render Deployment](https://camiloportfolio-nosc.onrender.com)

### Deploy en Cloudfare Pages

[Cloudfare Deployment](project-portfolionext.pages.dev)
