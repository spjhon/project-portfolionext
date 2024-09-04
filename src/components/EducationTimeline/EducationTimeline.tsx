import React from 'react';

const EducationTimeline = ({ side = 'left', title = 'Educación' }) => {
  const educationData = [
    {
      id: 1,
      degree: 'Licenciatura en Ingeniería de Software',
      institution: 'Universidad XYZ',
      date: '2018 - 2022',
    },
    {
      id: 2,
      degree: 'Diplomado en Diseño Web',
      institution: 'Instituto ABC',
      date: '2020 - 2021',
    },
    {
      id: 3,
      degree: 'Certificación en Desarrollo Full Stack',
      institution: 'Plataforma DEF',
      date: '2021',
    },
  ];

  const isLeft = side === 'left';

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <div className={`relative ${isLeft ? 'border-l-4' : 'border-r-4'} border-gray-200`}>
        {educationData.map((item) => (
          <div
            key={item.id}
            className={`mb-8 ${isLeft ? 'pl-8' : 'pr-8'} relative ${isLeft ? 'text-left' : 'text-right'}`}
          >
            <div
              className={`absolute w-6 h-6 bg-blue-500 rounded-full mt-1.5 ${isLeft ? '-left-3' : '-right-3'} border-4 border-white`}
            ></div>
            <p className="text-gray-600 text-sm">{item.date}</p>
            <h3 className="text-xl font-semibold">{item.degree}</h3>
            <p className="text-gray-500">{item.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
