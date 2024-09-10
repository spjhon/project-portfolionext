import React from 'react';

const HeroEducation: React.FC = () => {
  const isLandscape = window.innerWidth > window.innerHeight; // Detecta si está en modo landscape

  return (
    <div className="h-full p-5 lg:p-24 flex flex-col justify-center space-y-2">
      <p className="text-sm text-barra">Education</p>

      <h1 className="text-4xl font-bold text-barra">LEARNED FROM THE BEST</h1>

      <p className="text-sm text-barra">From Stephen Grider to Maximilian Schwarzmüller</p>
      <div className="w-16 h-0.5 bg-highlight my-2"></div>
      
      <button type='button' className="px-4 py-2 bg-secondary text-white font-semibold rounded">Hire Me</button>

      {/* Contenedor de imágenes */}
      {isLandscape && (
        <div className="flex space-x-4 mt-4">
          <div className="w-16 h-16 bg-gray-300">Image 1</div>
          <div className="w-16 h-16 bg-gray-300">Image 2</div>
          <div className="w-16 h-16 bg-gray-300">Image 3</div>
        </div>
      )}
    </div>
  );
};

export default HeroEducation;