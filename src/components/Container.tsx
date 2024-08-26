import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}


// Exportamos una función llamada Container que recibe props como argumento. El tipo de props es Readonly<ContainerProps>, 
//lo que significa que las propiedades son de solo lectura y siguen la estructura definida en ContainerProps.

/*

${props.className ? props.className : ""}: Esto añade cualquier clase CSS 
adicional pasada a través de la propiedad className de props. Si className no se proporciona, se añade una cadena vacía.

*/

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`p-2 mx-auto lg:p-3 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

