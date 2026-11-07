import React, { useState } from 'react';
import { Sparkles, Heart, X } from 'lucide-react';

interface SurpriseFloatingTeaserProps {
  onTriggerSurprise: () => void;
}

export const SurpriseFloatingTeaser: React.FC<SurpriseFloatingTeaserProps> = ({
  onTriggerSurprise,
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 z-40 animate-bounce duration-1000">
      <div className="relative bg-linear-to-r from-rose-600 to-pink-600 text-white p-1 pr-3 rounded-full shadow-xl flex items-center gap-2 border-2 border-white/80 cursor-pointer hover:scale-105 transition-transform">
        <button
          onClick={onTriggerSurprise}
          className="flex items-center gap-2 pl-1 cursor-pointer"
        >
          <span className="w-8 h-8 rounded-full bg-white text-rose-600 flex items-center justify-center text-sm shadow-xs">
            🍼
          </span>
          <div className="text-left">
            <p className="text-[11px] font-bold leading-tight">
              ¿Buscando departamento? 😉
            </p>
            <p className="text-[10px] text-rose-100 font-medium">
              ¡Hay un secreto en la foto 4! Tocá acá
            </p>
          </div>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setDismissed(true);
          }}
          className="p-1 rounded-full hover:bg-black/20 text-white/80 hover:text-white transition-colors cursor-pointer"
          title="Ocultar"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
