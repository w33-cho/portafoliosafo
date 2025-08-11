import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Mí</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soy una diseñadora apasionada por crear soluciones visuales que cuentan historias y generan impacto
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/img/2.jpg"
              alt="Safo trabajando"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Con más de 5 años en el mundo del diseño gráfico, he tenido la oportunidad de trabajar 
              con marcas de diversos sectores, desde startups tecnológicas hasta empresas consolidadas 
              en el mercado internacional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mi enfoque se basa en entender profundamente las necesidades de cada cliente para crear 
              soluciones visuales que no solo sean estéticamente atractivas, sino que también cumplan 
              objetivos estratégicos específicos.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-600">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">30+</div>
                <div className="text-sm text-gray-600">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">5+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;