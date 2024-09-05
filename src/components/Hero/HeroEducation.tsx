import React from 'react';

const HeroEducation: React.FC = () => {
  return (
    <div className="h-full p-5 sm:p-20 md:p-30 flex flex-col justify-center space-y-2">
  <p className="text-sm text-barra">Education</p>
  <h1 className="text-4xl font-bold text-gray-900 dark:text-barra">LEARNED FROM THE BEST</h1>
  <p className="text-sm text-barra">From Stephen Grider to Maximilian Schwarzmüller</p>
  <div className="w-16 h-0.5 bg-gray-300 my-2"></div>
  <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded">Hire Me</button>
</div>
  );
};


export default HeroEducation;