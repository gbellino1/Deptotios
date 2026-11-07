import React from 'react';
import { MapPin, Navigation, Train, Bus, GraduationCap, Utensils, Trees } from 'lucide-react';

interface LocationSectionProps {
  onTriggerSurprise: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onTriggerSurprise }) => {
  return (
    <div id="ubicacion" className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-xs space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Ubicación y Entorno</h3>
          <p className="text-xs text-gray-500">Mendoza 2900, Belgrano, Capital Federal</p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700">
          Belgrano R Residencial
        </span>
      </div>

      {/* Stylized Interactive Map Container */}
      <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-slate-100 h-64 sm:h-72">
        {/* Custom SVG stylized city map grid */}
        <div className="absolute inset-0 bg-[#e8ecef] flex items-center justify-center">
          <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#94a3b8" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Avenues */}
            <line x1="0" y1="35%" x2="100%" y2="35%" stroke="#cbd5e1" strokeWidth="14" />
            <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#cbd5e1" strokeWidth="10" />
            <line x1="30%" y1="0" x2="30%" y2="100%" stroke="#cbd5e1" strokeWidth="14" />
            <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#cbd5e1" strokeWidth="12" />
          </svg>
        </div>

        {/* Street labels */}
        <div className="absolute top-4 left-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest bg-white/80 px-2 py-0.5 rounded-sm">
          Av. Crámer
        </div>
        <div className="absolute bottom-6 right-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest bg-white/80 px-2 py-0.5 rounded-sm">
          Calle Moldes
        </div>
        <div className="absolute top-1/2 left-8 -translate-y-1/2 text-[11px] font-bold text-gray-700 uppercase tracking-wider bg-white/90 px-2 py-0.5 rounded-sm shadow-xs">
          Calle Mendoza 2900
        </div>

        {/* Pin marker with pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-rose-500/30 animate-ping absolute inset-0" />
            <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg relative z-10 ring-4 ring-white">
              <MapPin className="w-5 h-5 fill-white" />
            </div>
          </div>
          <div className="mt-2 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 whitespace-nowrap">
            <span>Mendoza 2900</span>
            <span className="text-[10px] text-amber-300">★ Depto</span>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs rounded-lg p-1.5 shadow-sm border border-gray-200 text-xs font-medium text-gray-700 flex items-center gap-1.5">
          <Navigation className="w-3.5 h-3.5 text-rose-600" />
          <span>Belgrano R, CABA</span>
        </div>

        <button 
          onClick={onTriggerSurprise}
          className="absolute top-3 right-3 bg-white/95 hover:bg-white text-rose-700 px-3 py-1 rounded-lg text-xs font-bold shadow-sm border border-rose-200 cursor-pointer transition-transform hover:scale-105"
        >
          📍 Ver cercanías a la casa de los tíos
        </button>
      </div>

      {/* Points of Interest Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/60">
          <div className="flex items-center gap-2 text-rose-600 mb-1">
            <Train className="w-4 h-4" />
            <span className="text-xs font-bold text-gray-900">Transporte</span>
          </div>
          <p className="text-[11px] text-gray-600">
            Estación Belgrano R (400 m) y Subte D Juramento (600 m).
          </p>
        </div>

        <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/60">
          <div className="flex items-center gap-2 text-emerald-600 mb-1">
            <Trees className="w-4 h-4" />
            <span className="text-xs font-bold text-gray-900">Espacios Verdes</span>
          </div>
          <p className="text-[11px] text-gray-600">
            Plaza Castelli y Plaza Alberti ideales para pasear el cochecito.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/60">
          <div className="flex items-center gap-2 text-amber-600 mb-1">
            <Utensils className="w-4 h-4" />
            <span className="text-xs font-bold text-gray-900">Gastronomía</span>
          </div>
          <p className="text-[11px] text-gray-600">
            Cafés de especialidad, heladerías Lucciano's y Rapanui a pasos.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-gray-50 border border-gray-200/60">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <GraduationCap className="w-4 h-4" />
            <span className="text-xs font-bold text-gray-900">Salud y Colegios</span>
          </div>
          <p className="text-[11px] text-gray-600">
            Cemic, Fleni y los mejores colegios de la zona norte de CABA.
          </p>
        </div>
      </div>
    </div>
  );
};
