
import React from "react";
import NeonTitle from "../neonTitle/NeonTitle";


const HeroMain: React.FC = () => {


  return (
    <div className="h-full p-5 lg:p-24 flex flex-col justify-center space-y-2">
      <p className="text-sm text-barra">Mi nombre es</p>
      <div className="relative ">
        <NeonTitle></NeonTitle>
        <h1 className="text-4xl font-bold text-barra">JUAN CAMILO</h1>
      </div>
      <p className="text-sm text-barra">Front-End Developer</p>
      <div className="w-16 h-0.5 bg-highlight my-2"></div>
      <button className="px-4 py-2 bg-secondary text-white font-semibold rounded">
        Hire Me
      </button>
    </div>
  );
};

export default HeroMain;
