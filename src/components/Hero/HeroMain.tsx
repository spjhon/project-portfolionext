import React from 'react';

const HeroMain: React.FC = () => {
  return (
    <div className="h-full p-5 sm:p-20 md:p-30 flex flex-col justify-center space-y-2">
      
      <p className="text-sm text-barra">Mi nombre es</p>
      <div className="relative">
      <img 
        src="https://via.placeholder.com/150x100" 
        alt="Placeholder" 
        className="absolute -top-14 right-8 w-24 h-auto transform rotate-45"
      />
      <h1 className="text-4xl font-bold text-barra">JUAN CAMILO</h1>
      </div>
      <p className="text-sm text-barra">Front-End Developer</p>
      <div className="w-16 h-0.5 bg-highlight my-2"></div>
      <button className="px-4 py-2 bg-secondary text-white font-semibold rounded">Hire Me</button>
    </div>
  );
};

export default HeroMain;
