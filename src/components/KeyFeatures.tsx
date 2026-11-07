import React from 'react';
import { 
  Maximize, 
  DoorClosed, 
  BedDouble, 
  Bath, 
  Car, 
  Sun, 
  Compass, 
  CalendarDays, 
  DollarSign, 
  Sparkles 
} from 'lucide-react';
import { PropertyData } from '../types.ts';

interface KeyFeaturesProps {
  property: PropertyData;
  onTriggerSurprise: () => void;
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({ property, onTriggerSurprise }) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-xs mb-6">
      
      {/* Price & Expenses Highlight Bar */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 pb-5 mb-5 border-b border-gray-100">
        <div>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
            Precio de venta
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              USD {property.priceUSD.toLocaleString('es-AR')}
            </span>
            <span className="text-xs text-gray-500 font-medium">
              (USD {(property.priceUSD / property.totalArea).toFixed(0)} / m²)
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-gray-50 px-3.5 py-2 rounded-xl border border-gray-200/70">
            <span className="text-[11px] text-gray-500 font-semibold block uppercase">
              Expensas mensuales
            </span>
            <span className="text-base font-bold text-gray-900">
              $ {property.expensesARS.toLocaleString('es-AR')} ARS
            </span>
          </div>

          <div className="bg-gray-50 px-3.5 py-2 rounded-xl border border-gray-200/70 hidden sm:block">
            <span className="text-[11px] text-gray-500 font-semibold block uppercase">
              ABL estimado
            </span>
            <span className="text-base font-bold text-gray-900">
              $ {property.ablARS.toLocaleString('es-AR')} ARS
            </span>
          </div>
        </div>
      </div>

      {/* Grid of Key Features (Zonaprop style icons) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
        
        {/* Surface */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/70 hover:bg-gray-100/70 transition-colors">
          <div className="p-2.5 rounded-lg bg-rose-50 text-rose-600">
            <Maximize className="w-5 h-5" />
          </div>
          <div>
            <span className="text-base font-bold text-gray-900 block leading-tight">
              {property.totalArea} m²
            </span>
            <span className="text-xs text-gray-500 font-medium">
              {property.coveredArea} m² cubiertos
            </span>
          </div>
        </div>

        {/* Ambientes */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/70 hover:bg-gray-100/70 transition-colors">
          <div className="p-2.5 rounded-lg bg-rose-50 text-rose-600">
            <DoorClosed className="w-5 h-5" />
          </div>
          <div>
            <span className="text-base font-bold text-gray-900 block leading-tight">
              {property.rooms} Ambientes
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Living comedor amplio
            </span>
          </div>
        </div>

        {/* Dormitorios */}
        <div 
          onClick={onTriggerSurprise}
          className="flex items-center gap-3 p-3 rounded-xl bg-rose-50/60 hover:bg-rose-100/60 border border-rose-200/80 transition-all cursor-pointer group"
          title="Ver detalle del tercer dormitorio"
        >
          <div className="p-2.5 rounded-lg bg-rose-500 text-white group-hover:scale-110 transition-transform">
            <BedDouble className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-base font-bold text-gray-900 leading-tight">
                {property.bedrooms} Dormitorios
              </span>
              <span className="text-[10px] bg-rose-600 text-white font-extrabold px-1 rounded-sm">
                ¡+1 👶!
              </span>
            </div>
            <span className="text-xs text-rose-700 font-semibold">
              ¡Habitación especial!
            </span>
          </div>
        </div>

        {/* Baños */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/70 hover:bg-gray-100/70 transition-colors">
          <div className="p-2.5 rounded-lg bg-rose-50 text-rose-600">
            <Bath className="w-5 h-5" />
          </div>
          <div>
            <span className="text-base font-bold text-gray-900 block leading-tight">
              {property.bathrooms} Baños
            </span>
            <span className="text-xs text-gray-500 font-medium">
              1 Completo + 1 Toilette
            </span>
          </div>
        </div>

        {/* Cochera */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/70 hover:bg-gray-100/70 transition-colors">
          <div className="p-2.5 rounded-lg bg-rose-50 text-rose-600">
            <Car className="w-5 h-5" />
          </div>
          <div>
            <span className="text-base font-bold text-gray-900 block leading-tight">
              1 Cochera
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Fija y cubierta (Rampa)
            </span>
          </div>
        </div>

        {/* Disposición */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/70 hover:bg-gray-100/70 transition-colors">
          <div className="p-2.5 rounded-lg bg-rose-50 text-rose-600">
            <Sun className="w-5 h-5" />
          </div>
          <div>
            <span className="text-base font-bold text-gray-900 block leading-tight">
              Contrafrente
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Súper silencioso y luminoso
            </span>
          </div>
        </div>

        {/* Antigüedad */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/70 hover:bg-gray-100/70 transition-colors">
          <div className="p-2.5 rounded-lg bg-rose-50 text-rose-600">
            <CalendarDays className="w-5 h-5" />
          </div>
          <div>
            <span className="text-base font-bold text-gray-900 block leading-tight">
              {property.ageYears} Años
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Edificio moderno
            </span>
          </div>
        </div>

        {/* Orientación */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/70 hover:bg-gray-100/70 transition-colors">
          <div className="p-2.5 rounded-lg bg-rose-50 text-rose-600">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="text-base font-bold text-gray-900 block leading-tight">
              Noreste
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Excelente asoleamiento
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
