import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, X, Volume2, VolumeX, MessageCircle, Share2, Award, Calendar } from 'lucide-react';
import { playCelebrationSound } from '../utils/audio.ts';

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
  surprisePhotoUrl: string;
}

export const SurpriseModal: React.FC<SurpriseModalProps> = ({
  isOpen,
  onClose,
  surprisePhotoUrl,
}) => {
  const [audioEnabled, setAudioEnabled] = useState(true);

  const fireConfetti = () => {
    // Left burst
    confetti({
      particleCount: 70,
      angle: 60,
      spread: 65,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#f59e0b', '#38bdf8', '#a855f7'],
    });
    // Right burst
    confetti({
      particleCount: 70,
      angle: 120,
      spread: 65,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#f59e0b', '#38bdf8', '#a855f7'],
    });
    // Center star burst
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { x: 0.5, y: 0.4 },
        shapes: ['circle', 'square'],
      });
    }, 250);
  };

  useEffect(() => {
    if (isOpen) {
      if (audioEnabled) {
        playCelebrationSound();
      }
      fireConfetti();
      // Second burst
      const timer = setTimeout(() => {
        fireConfetti();
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    '¡¡¡ME ENTERÉ DE LA NOTICIAAA!!! 😱😭❤️🍼 ¡¡¡VOY A SER TÍA / TÍO!!! ¡Los felicito de todo corazón, qué felicidad tan inmensa! Los amamos'
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-300">
      
      {/* Container */}
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border-4 border-rose-300 transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Celebration Ribbon */}
        <div className="bg-linear-to-r from-rose-600 via-pink-500 to-amber-500 px-6 py-4 text-white text-center relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              Noticia Oficial de la Familia
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setAudioEnabled(!audioEnabled);
                  if (!audioEnabled) playCelebrationSound();
                }}
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                title={audioEnabled ? 'Sonido activado' : 'Sonido silenciado'}
              >
                {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-white drop-shadow-md">
            ¡¡VAN A SER TÍOS!! 🍼👶🎉
          </h2>
          <p className="text-rose-100 text-sm font-medium mt-1">
            El verdadero motivo por el que les mandamos esta propiedad...
          </p>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto">
          
          {/* Main Photo Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-rose-200 bg-gray-100 mb-5 group">
            <img
              src={surprisePhotoUrl}
              alt="¡Van a ser tíos! Anuncio con Evatest"
              className="w-full h-auto max-h-[460px] object-cover object-center mx-auto"
            />
            {/* Stamp badge */}
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl shadow-md border border-rose-200 flex items-center gap-2">
              <span className="text-lg">✨</span>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 font-bold uppercase">Resultado</p>
                <p className="text-xs font-black text-rose-600">¡POSITIVO! (+)</p>
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 p-3 bg-linear-to-t from-black/85 via-black/40 to-transparent text-white text-center">
              <p className="font-handwriting text-2xl sm:text-3xl text-amber-200 drop-shadow-md">
                "¡Se agranda la tribu! Ya los queremos mucho tíos ❤️"
              </p>
            </div>
          </div>

          {/* Emotional Message Box */}
          <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 mb-5 text-gray-800 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center mx-auto -mt-10 mb-3 shadow-md ring-4 ring-white">
              <Heart className="w-6 h-6 fill-white animate-pulse" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              ¡Sí, estamos esperando un bebé!
            </h3>
            
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Perdón si pensaron que nos mudábamos a Belgrano en serio jaja 🤭... Pero no encontramos una manera más hermosa y divertida de darles esta noticia inolvidable:
            </p>

            <div className="bg-white rounded-xl p-4 border border-rose-200/80 shadow-xs text-left space-y-2 mb-4">
              <div className="flex items-start gap-2.5">
                <span className="text-lg">🧸</span>
                <div>
                  <strong className="text-xs uppercase tracking-wide text-rose-600 block">
                    El único requisito del depto:
                  </strong>
                  <span className="text-sm text-gray-700">
                    Muchos besos, paseos, complicidad y ser los mejores tíos consentidores del planeta.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-lg">🍼</span>
                <div>
                  <strong className="text-xs uppercase tracking-wide text-rose-600 block">
                    Fecha de entrega:
                  </strong>
                  <span className="text-sm text-gray-700 font-medium">
                    Próximamente... ¡Una vida entera llena de felicidad juntos!
                  </span>
                </div>
              </div>
            </div>

            <p className="font-handwriting text-2xl text-rose-700 font-bold">
              ¡Los amamos con todo nuestro corazón! ❤️
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                fireConfetti();
                playCelebrationSound();
              }}
              className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-rose-600 hover:bg-rose-700 text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>¡Tirar más confeti! 🎉</span>
            </button>

            <a
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Mandar reacción por WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="py-3 px-4 rounded-xl font-bold text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
            >
              Seguir viendo
            </button>
          </div>

        </div>

        {/* Footer tiny detail */}
        <div className="bg-gray-50 border-t border-gray-100 px-6 py-2.5 text-center text-[11px] text-gray-500">
          Inmobiliaria Ficticia PropApp · Creado con amor para los futuros tíos
        </div>

      </div>
    </div>
  );
};
