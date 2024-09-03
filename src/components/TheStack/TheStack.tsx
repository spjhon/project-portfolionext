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
    <div className="flex flex-col p-4">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative w-36 h-24 overflow-hidden">
            {image.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheStack;