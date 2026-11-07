import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { PropertyData } from '../types.ts';

interface FloatingMobileBarProps {
  property: PropertyData;
  onOpenContactModal: (type: 'whatsapp' | 'contact' | 'phone') => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({
  property,
  onOpenContactModal,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 shadow-2xl flex items-center justify-between gap-3">
      <div>
        <span className="text-[10px] text-gray-500 font-bold uppercase block">
          Precio de venta
        </span>
        <span className="text-xl font-black text-gray-900">
          USD {property.priceUSD.toLocaleString('es-AR')}
        </span>
        <span className="text-[10px] text-gray-500 block">
          Exp: $ {property.expensesARS.toLocaleString('es-AR')}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onOpenContactModal('whatsapp')}
          className="p-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
          title="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden xs:inline">WhatsApp</span>
        </button>

        <button
          onClick={() => onOpenContactModal('contact')}
          className="py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
        >
          <Mail className="w-4 h-4" />
          <span>Contactar</span>
        </button>
      </div>
    </div>
  );
};
