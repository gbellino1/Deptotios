import React, { useState } from 'react';
import { Camera, Maximize2, Sparkles, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Photo } from '../types.ts';

interface PhotoGalleryProps {
  photos: Photo[];
  onOpenLightbox: (index: number) => void;
  onTriggerSurprise: () => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  onOpenLightbox,
  onTriggerSurprise,
}) => {
  const [mobileIndex, setMobileIndex] = useState(0);

  const handleNextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrevMobile = () => {
    setMobileIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const surprisePhoto = photos.find((p) => p.isSurprise) || photos[3];

  return (
    <section className="mb-6">
      {/* Desktop Grid Layout (Classic 5-Photo Portal Mosaic) */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[460px] rounded-2xl overflow-hidden bg-gray-900 shadow-md relative group">
        
        {/* Main Hero Photo (Photo 1 - Living) */}
        <div 
          onClick={() => onOpenLightbox(0)}
          className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden group/main"
        >
          <img
            src={photos[0].url}
            alt={photos[0].title}
            className="w-full h-full object-cover group-hover/main:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover/main:opacity-60 transition-opacity" />
          <div className="absolute bottom-4 left-4 text-white">
            <span className="inline-block text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs mb-1">
              Foto principal
            </span>
            <p className="text-sm font-semibold drop-shadow-md">{photos[0].title}</p>
          </div>
        </div>

        {/* Photo 2 (Cocina) */}
        <div 
          onClick={() => onOpenLightbox(1)}
          className="relative cursor-pointer overflow-hidden group/sub"
        >
          <img
            src={photos[1].url}
            alt={photos[1].title}
            className="w-full h-full object-cover group-hover/sub:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-black/10 group-hover/sub:bg-transparent transition-colors" />
          <span className="absolute bottom-2 left-2 text-[11px] font-medium text-white px-2 py-0.5 bg-black/50 backdrop-blur-xs rounded-sm">
            {photos[1].tag || 'Cocina'}
          </span>
        </div>

        {/* Photo 3 (Dormitorio Principal) */}
        <div 
          onClick={() => onOpenLightbox(2)}
          className="relative cursor-pointer overflow-hidden group/sub"
        >
          <img
            src={photos[2].url}
            alt={photos[2].title}
            className="w-full h-full object-cover group-hover/sub:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-black/10 group-hover/sub:bg-transparent transition-colors" />
          <span className="absolute bottom-2 left-2 text-[11px] font-medium text-white px-2 py-0.5 bg-black/50 backdrop-blur-xs rounded-sm">
            {photos[2].tag || 'Dormitorio 1'}
          </span>
        </div>

        {/* Photo 4 (¡FOTO SORPRESA DEL TEST!) */}
        <div 
          onClick={() => {
            onTriggerSurprise();
            onOpenLightbox(3);
          }}
          className="relative cursor-pointer overflow-hidden group/surprise ring-2 ring-rose-400/80 shadow-inner"
        >
          <img
            src={surprisePhoto.url}
            alt="Habitación y Anuncio"
            className="w-full h-full object-cover object-top group-hover/surprise:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Subtle teaser overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-rose-950/70 via-black/20 to-transparent group-hover/surprise:from-rose-900/60 transition-colors" />
          <div className="absolute top-2 right-2">
            <span className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white shadow-md animate-bounce">
              <Sparkles className="w-3 h-3" />
              ¡Mirá acá!
            </span>
          </div>
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
            <span className="text-xs font-bold drop-shadow-md flex items-center gap-1">
              🍼 La mejor habitación
            </span>
            <span className="text-[10px] bg-rose-500/90 px-1.5 py-0.5 rounded-sm font-semibold">
              ¡Click!
            </span>
          </div>
        </div>

        {/* Photo 5 with '+ Fotos' badge */}
        <div 
          onClick={() => onOpenLightbox(4)}
          className="relative cursor-pointer overflow-hidden group/more"
        >
          <img
            src={photos[4]?.url || photos[0].url}
            alt="Balcón y vistas"
            className="w-full h-full object-cover group-hover/more:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center text-white p-2">
            <Camera className="w-6 h-6 mb-1 text-white/90" />
            <span className="text-sm font-bold tracking-tight">Ver las {photos.length} fotos</span>
            <span className="text-[11px] text-white/80">Plano y amenities</span>
          </div>
        </div>

        {/* Floating action pill on bottom right */}
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          <button
            onClick={() => onOpenLightbox(0)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/95 hover:bg-white text-gray-900 text-xs font-bold shadow-lg backdrop-blur-xs transition-all hover:scale-105 cursor-pointer"
          >
            <Maximize2 className="w-4 h-4 text-rose-600" />
            <span>Ver galería completa ({photos.length})</span>
          </button>
        </div>
      </div>

      {/* Mobile Carousel Layout */}
      <div className="md:hidden relative rounded-2xl overflow-hidden shadow-md bg-black">
        <div className="relative aspect-4/3 w-full">
          <img
            src={photos[mobileIndex].url}
            alt={photos[mobileIndex].title}
            className="w-full h-full object-cover"
            onClick={() => {
              if (photos[mobileIndex].isSurprise) {
                onTriggerSurprise();
              }
              onOpenLightbox(mobileIndex);
            }}
          />

          {/* If current slide is surprise photo */}
          {photos[mobileIndex].isSurprise && (
            <div 
              onClick={onTriggerSurprise}
              className="absolute inset-x-3 top-3 p-2.5 rounded-xl bg-rose-600/90 text-white shadow-lg backdrop-blur-xs flex items-center justify-between cursor-pointer animate-pulse"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">👶</span>
                <div>
                  <p className="text-xs font-bold">¡FOTO SORPRESA REVELADA!</p>
                  <p className="text-[10px] text-rose-100">Tocá acá para ver el mensaje completo</p>
                </div>
              </div>
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
          )}

          {/* Left / Right arrows */}
          <button
            onClick={handlePrevMobile}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white backdrop-blur-xs hover:bg-black/70"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextMobile}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white backdrop-blur-xs hover:bg-black/70"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Bottom info bar */}
          <div className="absolute inset-x-0 bottom-0 p-3 bg-linear-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-white">
            <span className="text-xs font-medium truncate max-w-[70%]">
              {photos[mobileIndex].title}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs">
                {mobileIndex + 1} / {photos.length}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnails indicator */}
        <div className="flex justify-center gap-1.5 py-2.5 bg-gray-900 px-4 overflow-x-auto">
          {photos.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => {
                setMobileIndex(idx);
                if (p.isSurprise) {
                  onTriggerSurprise();
                }
              }}
              className={`relative rounded-md overflow-hidden shrink-0 transition-all ${
                mobileIndex === idx ? 'ring-2 ring-rose-500 scale-105' : 'opacity-60'
              } ${p.isSurprise ? 'ring-2 ring-amber-400' : ''}`}
            >
              <img src={p.url} alt={p.title} className="w-12 h-9 object-cover" />
              {p.isSurprise && (
                <span className="absolute inset-0 bg-rose-600/40 flex items-center justify-center text-[10px]">
                  🍼
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
