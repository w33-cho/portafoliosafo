import React from 'react';
import ExperienceItem from './ExperienceItem';

export interface ExperienceData {
  company: string;
  position: string;
  period: string;
  description: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceData[] = [
    {
      company: 'Diseñadora Freelancer',
      position: 'Diseñadora Gráfica',
      period: '2023 - Presente',
      description: 'Lidero proyectos de branding para marcas internacionales y desarrollo identidades visuales completas.'
    },
    {
      company: 'Espiral',
      position: 'Diseñadora Gráfica Senior',
      period: '2022 - 2023',
      description: 'Creación de campañas publicitarias digitales y materiales impresos para clientes del sector tecnológico.'
    },
    {
      company: 'SRL Sublimagen',
      position: 'Diseñadora Gráfica',
      period: '2020-2022',
      description: 'Desarrollo de proyectos personalizados para pequeñas empresas, incluyendo logos, papelería corporativa y packaging.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mi Experiencia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un recorrido profesional enfocado en la excelencia y la innovación en diseño
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-orange-200"></div>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;