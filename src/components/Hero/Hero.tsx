import React from 'react';

interface HeroProps {
  children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <div
      className="relative  w-full h-full bg-cover bg-center bg-hero01 dark:bg-hero01Dark"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default Hero;