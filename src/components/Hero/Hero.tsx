import React from 'react';
import image from "../../../public/heroBackgrounds/hero01.jpg";

interface HeroProps {
  children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <div
      className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <span className="relative z-20 text-white text-4xl font-bold">{children}</span>
    </div>
  );
};

export default Hero;