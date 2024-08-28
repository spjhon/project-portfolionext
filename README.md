# Personal Portfolio

Pagina completamente estatica construida con Nextjs utilizando `output: 'export'`.

## Caracteristicas

- Totalmente Responsiva
- Multi-Lenguaje
- Animaciones con framer motion
- Next js 14 Renderizado Estatico
- Tema Claro y Oscuro
- CEO optimizada

## Librerias Utilizadas

- Next js Framework con React Componentes
- next-intl
- next-themes
- React
- clsx
- Tailwind CSS
- TypeScript

## Como usar

1. Clonar este repositorio

    `git clone https://github.com/spjhon/project-portfolionext.git`

2. Instalar dependencias

`npm install`

Para ejecutar modo desarrollador en localHost:3000

`npm run dev`

Para construir la pagina estatica lista para hostear en cualquier servidor

`npm run build`

## Comentarios sobre el codigo

Hay comentarios a lo largo del codigo intentando explicar para que sirve cada componente o descicion tomada, hay algunos comentarios en español, lo siento.

La base del sitio web se sienta sobre nextJs, tailwind, next-themes y next-intl. Interesantemente Hay un conflicto entre next-themes y next-intl por lo que next-themes al menos con tailwind  por lo que next-themes debe de
estar en el layout mas externo de la app, entonces debido a que el html y el body quedan por fuera de locale por lo que no es posible
asignar el locale al lang del html, sin embargo chatGPT salio con una solucion bastante ingeniosa, utilizar el useEffect en el
layout que tiene accesso al locale y una vez cargado el componente, ejecutar el useEffect para cambiar el lang en tiempo de carga
de la pagina, funciona bien hasta ahora.

En cuanto a next-intl se utiliza las rutas compartidas de acuerdo a su documentacion.

## Deployments

### Deploy en Render

[Render Deployment](https://camiloportfolio-nosc.onrender.com)

### Deploy en Cloudfare Pages

[Cloudfare Deployment](project-portfolionext.pages.dev)
