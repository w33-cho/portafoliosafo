import React from 'react';
import { SkillData } from './Skills';

interface SkillBarProps {
  skill: SkillData;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium text-gray-900">{skill.name}</span>
        <span className="text-sm text-gray-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-orange-600 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;