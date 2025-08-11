import React from 'react';
import { PortfolioData } from './Portfolio';

interface PortfolioItemProps {
  project: PortfolioData;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 
         object-cover group-hover:scale-110 transition-transform duration-400"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-orange-600 font-medium mb-2">{project.category}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;