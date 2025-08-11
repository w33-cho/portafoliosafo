import React from 'react';
import PortfolioItem from './PortfolioItem';

export interface PortfolioData {
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const portfolio: PortfolioData[] = [
    {
      title: 'Identidad Corporativa - Bar Nocturno',
      category: 'Branding',
      image: '/img/3.jpg',
      description: 'Desarrollo completo de identidad visual'
    },
    {
      title: 'Publicidad',
      category: 'Publicidad Digital',
      image: '/img/4.jpg',
      description: 'Campañas en redes sociales, imagenes, videos y banner para anuncios'
    },
    {
      title: 'Packaging - KN Hamburguesas',
      category: 'Packaging',
      image: '/img/5.jpg',
      description: 'Diseño de empaque para super-hamburguesas'
    },
    {
      title: 'Para eventos y personas',
      category: 'Papelería',
      image: '/img/6.jpg',
      description: 'Invitaciones, trípticos, menus y targetas de presentación'
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mi Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una selección de mis trabajos más destacados en diferentes disciplinas del diseño
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((project, index) => (
            <PortfolioItem key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;