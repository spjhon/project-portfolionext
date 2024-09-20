// TheStack.tsx
import React from "react";

interface ImageData {
  id: string;
  icon: JSX.Element; // Cambia src a JSX.Element para manejar componentes SVG
  label: string; // Agrega la propiedad label a la interfaz
  link: string;
}

interface TheStackProps {
  title: string;
  images: ImageData[];
}

const TheStack: React.FC<TheStackProps> = ({ title, images }) => {
  return (
    <fieldset className="flex flex-col p-4 border-2 m-2 rounded-xl">
      <legend>{title}</legend>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <a
            key={image.id}
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            title={image.label}
          >
            <div className="group relative flex flex-col items-center">
              <div className="transition-transform transform group-hover:translate-x-2 group-hover:translate-y-[-4px] group-hover:shadow-2xl group-hover:scale-105">
                {image.icon}
              </div>
              <span className="mt-2 text-center transition-transform transform group-hover:translate-x-2 group-hover:translate-y-[-4px]  group-hover:scale-105">
                {image.label}
              </span>
            </div>
          </a>
        ))}
      </div>
    </fieldset>
  );
};

export default TheStack;
