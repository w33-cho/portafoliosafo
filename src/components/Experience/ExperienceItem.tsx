import React from 'react';
import { ExperienceData } from './Experience';

interface ExperienceItemProps {
  experience: ExperienceData;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {
  return (
    <div className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
      <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
            <span className="text-sm text-orange-600 font-medium">{experience.period}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.position}</h3>
          <h4 className="text-lg text-gray-600 mb-3">{experience.company}</h4>
          <p className="text-gray-700">{experience.description}</p>
        </div>
      </div>
      <div className="  max-lg:hidden  absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
    </div>
    
  );
};

export default ExperienceItem;