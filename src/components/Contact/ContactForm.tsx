import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const[name,setName]=useState('')
  const[mensaje,setMensaje]=useState('') 

  
 const sendMessage = () => {

  window.open(`https://api.whatsapp.com/send?phone=+5352078283&text=Hola, soy ${name} ${mensaje}`,"_blank");

 }
  return (
    <div>
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Tu nombre"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje
          </label>
          <textarea
            value={mensaje}
            onChange={e => setMensaje(e.target.value)}
            id="message"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
            placeholder="Cuéntame sobre tu proyecto..."
          ></textarea>
        </div>
        <button
        onClick={sendMessage}
          type="button"
          className="w-full bg-orange-600 text-white py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;