import React, { useEffect } from 'react';
import { Heart, MessageCircle, Phone, Sparkles, X, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCelebrationSound } from '../utils/audio.ts';

interface ContactSurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFullSurprise: () => void;
  actionType: 'whatsapp' | 'contact' | 'phone';
}

export const ContactSurpriseModal: React.FC<ContactSurpriseModalProps> = ({
  isOpen,
  onClose,
  onOpenFullSurprise,
  actionType,
}) => {
  useEffect(() => {
    if (isOpen) {
      playCelebrationSound();
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#fb7185', '#fda4af', '#f59e0b', '#38bdf8'],
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    '¡¡¡ME ENTERÉ DE LA NOTICIA EN PROPAPP!!! 🍼👶❤️ ¡¡VOY A SER TÍA / TÍO!! ¡Qué hermosa sorpresa los amamos!'
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-rose-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Header graphic */}
        <div className="bg-linear-to-br from-rose-500 via-pink-500 to-amber-500 p-6 text-white text-center">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center mx-auto mb-3 text-3xl shadow-inner">
            🍼
          </div>
          <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full bg-white/25 mb-1">
            Consulta sobre Mendoza 2900
          </span>
          <h3 className="text-2xl font-black">
            ¡Mensaje para los futuros tíos!
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <div className="mb-5 bg-rose-50 border border-rose-200 rounded-2xl p-5">
            <p className="text-gray-900 font-bold text-lg sm:text-xl leading-snug mb-2">
              ¡Sorpresa! ❤️
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              El único requisito indispensable para consultar por este departamento es que... <br />
              <strong className="text-rose-600 font-extrabold text-lg block mt-1">
                ¡Vas a ser tía y tío muy pronto! 👶✨
              </strong>
            </p>
          </div>

          <p className="text-xs text-gray-500 mb-6">
            No pudimos resistir las ganas de darles la mejor noticia de nuestras vidas con esta travesura inmobiliaria.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenFullSurprise();
              }}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-rose-600 hover:bg-rose-700 text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Ver la foto con el test de embarazo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Escribirnos ahora al WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="py-2.5 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors"
            >
              Volver a mirar la publicación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
