import React from 'react';
import { Home, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onTriggerSurprise: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onTriggerSurprise }) => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-12 pb-24 md:pb-12 mt-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800 text-xs">
          
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white">
                <Home className="w-4 h-4" />
              </div>
              <span className="text-xl font-black text-white">
                Prop<span className="text-rose-500">App</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              El portal inmobiliario digital para encontrar el hogar de tus sueños y las noticias más hermosas de la vida.
            </p>
            <button
              onClick={onTriggerSurprise}
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>🍼 Mensaje para la tía y el tío</span>
            </button>
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Búsquedas frecuentes
            </h4>
            <ul className="space-y-1.5 text-gray-400">
              <li><a href="#" className="hover:text-white">Departamentos en Belgrano</a></li>
              <li><a href="#" className="hover:text-white">Departamentos en Palermo</a></li>
              <li><a href="#" className="hover:text-white">Departamentos en Nuñez</a></li>
              <li><a href="#" className="hover:text-white">Casas con jardín en CABA</a></li>
              <li><a href="#" className="hover:text-white">Emprendimientos en pozo</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Portal & Anunciantes
            </h4>
            <ul className="space-y-1.5 text-gray-400">
              <li><a href="#" className="hover:text-white">Publicar propiedad</a></li>
              <li><a href="#" className="hover:text-white">Directorio de Inmobiliarias</a></li>
              <li><a href="#" className="hover:text-white">Índice de precios Zonaprop</a></li>
              <li><a href="#" className="hover:text-white">Guía de Barrios</a></li>
              <li><a href="#" className="hover:text-white">Términos y Condiciones</a></li>
            </ul>
          </div>

          {/* Column 4 - Agent Card */}
          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Inmobiliaria a cargo
            </h4>
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80 space-y-1.5">
              <p className="text-white font-bold text-sm">Bellino & Familia Propiedades</p>
              <p className="text-gray-400 text-[11px]">Matrícula CUCICBA N° 7842</p>
              <p className="text-gray-400 text-[11px]">Mendoza 2900, Belgrano, CABA</p>
              <div className="pt-1 flex items-center gap-1 text-emerald-400 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Corredor inmobiliario verificado</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimers (Authentic Argentine Real Estate Requirements) */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-gray-400 space-y-2 leading-relaxed">
          <p>
            <strong>Ley 5859 - CABA:</strong> Para los casos de alquiler de vivienda, el monto máximo de comisión que se le puede requerir a los propietarios será el equivalente al cuatro con quince centésimos por ciento (4,15%) del valor total del respectivo contrato. Se encuentra expresamente prohibido cobrar a los inquilinos que sean personas físicas comisiones inmobiliarias y gastos de gestoría de informes.
          </p>
          <p>
            <strong>Accesibilidad Ley 5115:</strong> El edificio cuenta con rampa de acceso para personas con movilidad reducida en el hall principal y ascensor con capacidad reglamentaria.
          </p>
          <p>
            Las medidas, superficies y valores de expensas consignadas en la presente publicación son aproximadas y al solo efecto orientativo. Los datos definitivos surgirán del título de propiedad y comprobantes respaldatorios.
          </p>
        </div>

        {/* Bottom tribute line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>© 2026 Inmobiliaria PropApp Argentina. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1.5 text-rose-400 font-medium">
            <span>Hecho con todo el amor de la familia para los futuros tíos</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
};
