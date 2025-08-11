import React from 'react';
import { Mail, Phone, MapPin} from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div>
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <Mail className="text-orange-600" size={20} />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <p className="text-gray-600">roselygonzalezperez2@email.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <Phone className="text-orange-600" size={20} />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Teléfono</h3>
            <p className="text-gray-600">+53 52078283</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <MapPin className="text-orange-600" size={20} />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Ubicación</h3>
            <p className="text-gray-600">Bayamo-Cuba</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;