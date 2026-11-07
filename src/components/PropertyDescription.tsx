import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, Sparkles, Building, Waves, Flame, Shield, Car, Wind, Dumbbell } from 'lucide-react';
import { PropertyData } from '../types.ts';

interface PropertyDescriptionProps {
  property: PropertyData;
  onTriggerSurprise: () => void;
}

export const PropertyDescription: React.FC<PropertyDescriptionProps> = ({
  property,
  onTriggerSurprise,
}) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="space-y-6">
      
      {/* Description Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-xs">
        <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100 flex items-center justify-between">
          <span>Descripción de la propiedad</span>
          <span className="text-xs font-semibold text-gray-500">Aviso # {property.code}</span>
        </h2>

        {/* Highlight Banner with subtle teaser */}
        <div 
          onClick={onTriggerSurprise}
          className="mb-4 p-3.5 rounded-xl bg-linear-to-r from-rose-50 via-pink-50 to-amber-50 border border-rose-200 flex items-center justify-between cursor-pointer hover:border-rose-400 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl group-hover:scale-110 transition-transform">🍼</span>
            <div>
              <p className="text-xs font-bold text-rose-800 uppercase tracking-wider">
                Nota importante para los futuros tíos
              </p>
              <p className="text-xs text-rose-700">
                Este departamento viene con una sorpresa incluida en la habitación 3... ¿Querés verla?
              </p>
            </div>
          </div>
          <span className="text-xs font-extrabold text-white bg-rose-600 px-3 py-1 rounded-lg group-hover:bg-rose-700 transition-colors shadow-xs">
            ¡Descubrir!
          </span>
        </div>

        {/* Text body */}
        <div className={`prose prose-sm max-w-none text-gray-700 space-y-3 ${!expanded ? 'line-clamp-6' : ''}`}>
          {property.description.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="whitespace-pre-line leading-relaxed text-sm sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 cursor-pointer"
        >
          <span>{expanded ? 'Mostrar menos' : 'Leer descripción completa'}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Características & Instalaciones */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-xs">
        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
          Características principales
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {property.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities del Edificio */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-xs">
        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100 flex items-center justify-between">
          <span>Amenities y Servicios</span>
          <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
            Edificio de Categoría
          </span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {property.amenities.map((amenity, idx) => (
            <div 
              key={idx} 
              className="p-3 rounded-xl border border-gray-200/80 bg-gray-50/50 flex flex-col items-center text-center gap-2 hover:bg-rose-50/50 hover:border-rose-200 transition-colors"
            >
              <div className="p-2 rounded-lg bg-white shadow-xs text-rose-600">
                {idx === 0 && <Waves className="w-5 h-5" />}
                {idx === 1 && <Flame className="w-5 h-5" />}
                {idx === 2 && <Car className="w-5 h-5" />}
                {idx === 3 && <Shield className="w-5 h-5" />}
                {idx === 4 && <Wind className="w-5 h-5" />}
                {idx === 5 && <Building className="w-5 h-5" />}
                {idx === 6 && <Shield className="w-5 h-5" />}
                {idx === 7 && <Dumbbell className="w-5 h-5" />}
              </div>
              <span className="text-xs font-semibold text-gray-800">{amenity}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
