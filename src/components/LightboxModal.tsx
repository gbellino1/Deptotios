import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';
import { Photo } from '../types.ts';

interface LightboxModalProps {
  isOpen: boolean;
  currentIndex: number;
  photos: Photo[];
  onClose: () => void;
  onNavigate: (index: number) => void;
  onTriggerSurprise: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  currentIndex,
  photos,
  onClose,
  onNavigate,
  onTriggerSurprise,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % photos.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + photos.length) % photos.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, photos.length, onClose, onNavigate]);

  if (!isOpen) return null;

  const currentPhoto = photos[currentIndex];
  const isSurprise = currentPhoto.isSurprise;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white pb-3 border-b border-white/10 z-10">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold bg-white/15 px-3 py-1 rounded-full">
            {currentIndex + 1} de {photos.length}
          </span>
          <span className="text-xs sm:text-sm text-gray-300 font-medium hidden sm:inline">
            Mendoza 2900, Belgrano
          </span>
        </div>

        {isSurprise && (
          <button
            onClick={onTriggerSurprise}
            className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-lg animate-pulse cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>¡Ver la gran sorpresa!</span>
          </button>
        )}

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Cerrar galería"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Area with Prev/Next buttons */}
      <div className="relative flex-1 flex items-center justify-center my-2 sm:my-4 overflow-hidden">
        
        <button
          onClick={() => onNavigate((currentIndex - 1 + photos.length) % photos.length)}
          className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 cursor-pointer"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="relative max-h-full max-w-full flex flex-col items-center justify-center">
          <img
            src={currentPhoto.url}
            alt={currentPhoto.title}
            className={`max-h-[68vh] sm:max-h-[74vh] max-w-full w-auto object-contain rounded-xl shadow-2xl transition-all duration-300 ${
              isSurprise ? 'ring-4 ring-rose-500 shadow-rose-500/30' : ''
            }`}
          />

          {isSurprise && (
            <div 
              onClick={onTriggerSurprise}
              className="mt-3 cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-rose-600 to-pink-600 text-white font-bold text-sm shadow-xl hover:scale-105 transition-transform"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>¡Atención Tíos! Toquen aquí para leer el mensaje especial ❤️🍼</span>
            </div>
          )}
        </div>

        <button
          onClick={() => onNavigate((currentIndex + 1) % photos.length)}
          className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all hover:scale-110 cursor-pointer"
          aria-label="Foto siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Info & Thumbnails Bar */}
      <div className="pt-2 border-t border-white/10 z-10 flex flex-col items-center">
        <div className="text-center mb-2">
          <h4 className="text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2">
            {currentPhoto.title}
            {isSurprise && <span className="text-amber-400">✨🍼</span>}
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm">
            {currentPhoto.description}
          </p>
        </div>

        {/* Thumbnail row */}
        <div className="flex gap-2 overflow-x-auto max-w-full pb-1 px-2">
          {photos.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => onNavigate(idx)}
              className={`relative rounded-md overflow-hidden shrink-0 transition-all ${
                currentIndex === idx
                  ? 'ring-2 ring-rose-500 scale-105'
                  : 'opacity-50 hover:opacity-80'
              } ${p.isSurprise ? 'ring-2 ring-amber-400' : ''}`}
            >
              <img src={p.url} alt={p.title} className="w-14 h-10 object-cover" />
              {p.isSurprise && (
                <span className="absolute inset-0 bg-rose-600/50 flex items-center justify-center text-[11px]">
                  🍼
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
