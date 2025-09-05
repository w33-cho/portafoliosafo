import React from 'react';
import { Download, ChevronDown } from 'lucide-react';
import Portfolio from '../../pdf/portafolio.pdf';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  
   
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Soy Safo,
            <span className="text-[#F77B01]">
              {' '}Diseñadora Gráfica
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Creo experiencias visuales únicas que conectan marcas con sus audiencias. 
            Especializada en branding, diseño digital y comunicación visual impactante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              className="bg-[#F77B01] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            href='https://api.whatsapp.com/send?phone=5352078283&text=Hola'>
              Contáctame
            </a>
             
            <a className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-orange-600 hover:text-orange-600 transition-colors flex items-center gap-2 justify-center" target='_blank' href={Portfolio}  rel='noopener noreferrer' download={Portfolio} >
              <Download size={16} />
              Descargar CV
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto relative">
            <img
              src="/img/1.jpg"
              alt="Rosy"
              className="w-full h-full object-cover rounded-full shadow-2xl"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
            <div className="w-16 h-16 bg-[#F77B01] rounded-full flex items-center justify-center text-white font-bold text-xl">
              5+
            </div>
          </div>
        </div>
        <div className=" max-lg:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-orange-400" />
      </div>
      </div>
    </section>
  );
};

export default Hero;