import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  Calendar, 
  CheckCircle, 
  ShieldCheck, 
  Building2, 
  Sparkles,
  Info
} from 'lucide-react';
import { PropertyData } from '../types.ts';

interface SidebarContactProps {
  property: PropertyData;
  onOpenContactModal: (type: 'whatsapp' | 'contact' | 'phone') => void;
  onTriggerSurprise: () => void;
}

export const SidebarContact: React.FC<SidebarContactProps> = ({
  property,
  onOpenContactModal,
  onTriggerSurprise,
}) => {
  const [showPhone, setShowPhone] = useState(false);
  const [selectedDate, setSelectedDate] = useState('2026-11-15');

  return (
    <aside className="sticky top-20 space-y-4">
      
      {/* Main Contact Box */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200/90 shadow-md">
        
        {/* Price & Expensas in sidebar */}
        <div className="pb-4 mb-4 border-b border-gray-100">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
            Valor de publicación
          </span>
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-black text-gray-900 tracking-tight">
              USD {property.priceUSD.toLocaleString('es-AR')}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700">
              Oportunidad
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            + Expensas: <strong className="text-gray-800">$ {property.expensesARS.toLocaleString('es-AR')} ARS</strong>
          </p>
        </div>

        {/* Real Estate Agency / Agent Card */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200/60 mb-5">
          <div className="relative">
            <img
              src={property.agent.avatar}
              alt={property.agent.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center text-[9px] text-white">
              ✓
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-gray-900 truncate flex items-center gap-1">
              <span>{property.agent.agency}</span>
            </h4>
            <p className="text-xs text-gray-500 truncate">{property.agent.name}</p>
            <p className="text-[10px] text-gray-400 font-medium">{property.agent.license}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          {/* Contact Button */}
          <button
            onClick={() => onOpenContactModal('contact')}
            className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-rose-600 hover:bg-rose-700 text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Contactar anunciante</span>
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={() => onOpenContactModal('whatsapp')}
            className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
          >
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>WhatsApp directo</span>
          </button>

          {/* View Phone Button */}
          <button
            onClick={() => {
              setShowPhone(!showPhone);
              onOpenContactModal('phone');
            }}
            className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs border border-gray-300 hover:border-gray-400 text-gray-700 bg-white hover:bg-gray-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-gray-500" />
            <span>
              {showPhone ? property.agent.phone : 'Ver teléfono (+54 9 11 ...)'}
            </span>
          </button>
        </div>

        {/* Agendar Visita Mini form */}
        <div className="mt-5 pt-4 border-t border-gray-100">
          <label className="text-xs font-bold text-gray-700 block mb-1.5 flex items-center justify-between">
            <span>Coordinar visita presencial</span>
            <span className="text-[10px] text-rose-600 font-semibold">Exclusivo familia</span>
          </label>
          <div className="flex gap-2">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="flex-1 text-xs border border-gray-300 rounded-lg px-2.5 py-1.5 text-gray-700 font-medium focus:outline-hidden"
            />
            <button
              onClick={onTriggerSurprise}
              className="px-3 py-1.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
            >
              Pedir
            </button>
          </div>
        </div>

        {/* Safety guarantees disclaimer */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-[11px] text-gray-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Aviso garantizado por Inmobiliaria PropApp CABA</span>
        </div>
      </div>

      {/* Credit simulator card */}
      <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-4 border border-amber-200/80">
        <div className="flex items-start gap-2.5">
          <div className="p-2 rounded-lg bg-amber-500 text-white shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-amber-900">
              ¿Apto crédito hipotecario?
            </h5>
            <p className="text-[11px] text-amber-800 mt-0.5 leading-snug">
              Cuota estimada desde $ 950.000 / mes. O mejor aún... ¡visitar a los futuros tíos los domingos es 100% gratis! ❤️
            </p>
            <button
              onClick={onTriggerSurprise}
              className="mt-2 text-xs font-extrabold text-amber-900 underline hover:text-amber-950 cursor-pointer"
            >
              Consultar condiciones especiales →
            </button>
          </div>
        </div>
      </div>

    </aside>
  );
};
