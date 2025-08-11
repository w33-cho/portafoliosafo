import React from 'react';
import SkillBar from './SkillBar';

export interface SkillData {
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const skills: SkillData[] = [
    { name: 'Adobe Photoshop', level: 95 },
    { name: 'WonderShare Filmora', level: 92 },
    { name: 'CorelDRAW', level: 92 },
    { name: 'Canva', level: 92 },
    { name: 'Branding', level: 90 },
    { name: 'Print Design', level: 89 }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mis Habilidades</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dominio técnico y creativo en las herramientas más importantes del diseño moderno
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;