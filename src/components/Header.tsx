import React, { useState } from 'react';
import { Home, Search, Heart, User, Bell, ChevronDown, Share2, Menu } from 'lucide-react';

interface HeaderProps {
  onTriggerSurprise: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onTriggerSurprise }) => {
  const [favoriteActive, setFavoriteActive] = useState(true);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-xs">
      {/* Top micro bar */}
      <div className="bg-[#1f2937] text-gray-300 text-xs py-1 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Portal Inmobiliario Líder en Argentina
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">Belgrano, Ciudad Autónoma de Buenos Aires</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onTriggerSurprise}
              className="text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1 font-medium cursor-pointer"
            >
              <span>✨ Aviso destacado para la familia</span>
            </button>
            <span className="text-gray-400">|</span>
            <span className="hover:text-white cursor-pointer">Cotizaciones</span>
            <span className="hover:text-white cursor-pointer">Créditos UVA</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-rose-600 via-rose-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
                <Home className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black tracking-tight text-gray-900">
                    Prop<span className="text-rose-600">App</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-sm bg-rose-100 text-rose-700">
                    Baires
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 -mt-1 font-medium">Inmobiliaria & Portales</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-700">
              <a href="#" className="text-rose-600 border-b-2 border-rose-600 pb-0.5">Comprar</a>
              <a href="#" className="hover:text-rose-600 transition-colors">Alquilar</a>
              <a href="#" className="hover:text-rose-600 transition-colors">Temporal</a>
              <a href="#" className="hover:text-rose-600 transition-colors">Emprendimientos</a>
              <a href="#" className="hover:text-rose-600 transition-colors">Inmobiliarias</a>
            </nav>
          </div>

          {/* Search bar simulator */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                readOnly
                value="Mendoza 2900, Belgrano, CABA"
                className="w-full pl-9 pr-24 py-1.5 text-sm bg-gray-50 border border-gray-300 rounded-full text-gray-800 font-medium focus:outline-hidden cursor-default shadow-xs"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold px-2 py-0.5 bg-rose-50 text-rose-700 rounded-full">
                4 amb
              </span>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setFavoriteActive(!favoriteActive)}
              className={`p-2 rounded-full border transition-colors cursor-pointer ${
                favoriteActive 
                  ? 'border-rose-200 bg-rose-50 text-rose-600' 
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
              title="Guardado en favoritos"
            >
              <Heart className={`w-5 h-5 ${favoriteActive ? 'fill-rose-500' : ''}`} />
            </button>

            <button 
              onClick={onTriggerSurprise}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100 text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              <span className="text-sm">👶</span>
              <span>¡Ver sorpresa!</span>
            </button>

            <button className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-sm transition-all cursor-pointer">
              <span>Publicar</span>
            </button>

            <button className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-gray-900 py-1.5 px-2 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-xs">
                GB
              </div>
              <span className="hidden md:inline">Familia</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 hidden md:inline" />
            </button>

            <button className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
