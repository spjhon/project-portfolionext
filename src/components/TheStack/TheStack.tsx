// TheStack.tsx
import React from 'react';

interface ImageData {
  id: string;
  icon: JSX.Element; // Cambia src a JSX.Element para manejar componentes SVG
}

interface TheStackProps {
  title: string;
  images: ImageData[];
}

const TheStack: React.FC<TheStackProps> = ({ title, images }) => {
  return (
    <fieldset className="flex flex-col p-4 border-2 m-2 rounded-xl">
      <legend className=''>{title}</legend>
      <div className="flex flex-wrap gap-4 ">
        {images.map((image) => (
          <div key={image.id} className="relative max-w-11 ">
            {image.icon}
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default TheStack;