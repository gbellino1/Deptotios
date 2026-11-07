import React, { useState } from 'react';
import { MapPin, Share2, Heart, Eye, Calendar, ShieldCheck, Check } from 'lucide-react';
import { PropertyData } from '../types.ts';

interface PropertyHeaderProps {
  property: PropertyData;
  onTriggerSurprise: () => void;
}

export const PropertyHeader: React.FC<PropertyHeaderProps> = ({ property, onTriggerSurprise }) => {
  const [copied, setCopied] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Mirá este departamento en ${property.address}!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mb-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500 mb-3">
        <a href="#" className="hover:text-rose-600 transition-colors">PropApp</a>
        <span>/</span>
        <a href="#" className="hover:text-rose-600 transition-colors">Venta</a>
        <span>/</span>
        <a href="#" className="hover:text-rose-600 transition-colors">Departamentos</a>
        <span>/</span>
        <a href="#" className="hover:text-rose-600 transition-colors">Capital Federal</a>
        <span>/</span>
        <a href="#" className="hover:text-rose-600 transition-colors">Belgrano</a>
        <span>/</span>
        <span className="text-gray-800 font-semibold truncate max-w-[200px] sm:max-w-none">
          Mendoza 2900
        </span>
      </nav>

      {/* Meta tags row */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Aviso Verificado
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            {property.operation} · {property.propertyType}
          </span>
          <span className="text-xs text-gray-500 hidden sm:inline">
            Publicado hace {property.publishedDaysAgo} días
          </span>
          <span className="text-xs text-gray-400 hidden sm:inline">·</span>
          <span className="text-xs text-gray-500 items-center gap-1 hidden sm:inline-flex">
            <Eye className="w-3.5 h-3.5 text-gray-400" />
            {property.viewsCount} visitas
          </span>
        </div>

        {/* Action icons (Share & Fav) */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer shadow-xs"
            title="Compartir aviso"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? '¡Copiado!' : 'Compartir'}</span>
          </button>
          
          <button
            onClick={() => setFavorite(!favorite)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer shadow-xs ${
              favorite
                ? 'bg-rose-50 border-rose-200 text-rose-600'
                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${favorite ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{favorite ? 'Guardado' : 'Favorito'}</span>
          </button>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
        {property.title}
      </h1>

      {/* Location line */}
      <div className="flex items-center gap-1.5 text-gray-600 text-sm font-medium">
        <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
        <span>{property.address}, {property.neighborhood}, {property.city}</span>
        <a 
          href="#ubicacion" 
          className="text-xs font-bold text-rose-600 hover:underline ml-1"
        >
          (Ver en mapa)
        </a>
      </div>
    </div>
  );
};
