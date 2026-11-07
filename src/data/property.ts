import { PropertyData } from '../types.ts';

export const PROPERTY: PropertyData = {
  id: 'prop-mendoza-2900',
  code: 'ZON-849201',
  title: 'Excelente departamento de 3 dormitorios con balcón y cochera fija cubierta',
  operation: 'Venta',
  propertyType: 'Departamento',
  priceUSD: 235000,
  expensesARS: 400000,
  expensesUSDApprox: 330,
  ablARS: 34500,
  address: 'Mendoza 2900 (entre Av. Crámer y Moldes)',
  neighborhood: 'Belgrano',
  city: 'Capital Federal, Buenos Aires',
  totalArea: 90,
  coveredArea: 82,
  rooms: 4,
  bedrooms: 3,
  bathrooms: 2,
  garages: 1,
  ageYears: 7,
  disposition: 'Contrafrente muy luminoso',
  orientation: 'Noreste (sol de mañana y tarde)',
  publishedDaysAgo: 3,
  viewsCount: 1642,
  description: `Excelente departamento de 3 dormitorios al contrafrente muy luminoso. Amplio living comedor con salida a balcón, cocina equipada con comedor diario, dormitorios con placard, cochera fija cubierta incluida en el valor. Edificio con amenities. Ideal ubicación en Belgrano.

Distribución y ambientes:
• Living Comedor: Gran ambiente apaisado de 6.80 x 3.60 m con pisos de madera Patagonia Flooring, salida directa a balcón corrido con vista abierta a pulmón de manzana súper verde y silencioso.
• Cocina Independiente: 4.20 x 2.20 m con comedor diario, muebles bajo mesada y alacenas Reno de diseño, mesada de Silestone, espacio para lavavajillas y lavadero incorporado.
• Dormitorio Principal: 3.60 x 3.20 m con placard de piso a techo con interiores completos, persiana de aluminio y aire acondicionado split frío/calor.
• Segundo Dormitorio: 3.10 x 3.00 m muy luminoso con amplio placard y ventanal con doble vidriado hermético (DVH).
• Tercer Dormitorio / Habitación Especial: 3.00 x 2.80 m. Perfecto para escritorio, biblioteca... ¡o quizás el cuarto soñado para un nuevo integrante de la familia! 🧸🍼
• Baños: 1 baño completo con bañera y ventilación natural + 1 toilette de recepción con grifería FV de primera calidad.
• Cochera y Baulera: Cochera fija cubierta de fácil maniobra en 1° subsuelo por rampa, más baulera individual tipo jaula.

El Edificio y sus Amenities:
• Edificio moderno de categoría con solo 9 pisos.
• Terraza con piscina climatizada y solárium con reposeras.
• SUM (Salón de Usos Múltiples) totalmente equipado con parrilla techada, mesas, vajilla y TV gigante, ideal para reuniones familiares y futuros bautismos/cumpleaños.
• Tótem de seguridad 24hs con monitoreo remoto y control de acceso magnético.
• Espacio reservado para cochecitos en el hall de entrada.

Ubicación inmejorable en Belgrano:
A 2 cuadras de Av. Crámer, 4 cuadras de la estación Belgrano R (Línea Mitre) y 6 cuadras de Av. Cabildo (Subte Línea D y Metrobus). Rodeado de cafés de especialidad, colegios bilingües y las mejores plazas de la zona (Plaza Castelli y Plaza Alberti).`,
  features: [
    '90 m² Totales',
    '82 m² Cubiertos',
    '4 Ambientes',
    '3 Dormitorios',
    '2 Baños',
    '1 Cochera fija cubierta',
    'Contrafrente luminoso',
    'Orientación Noreste',
    'Calefacción por losa radiante individual',
    'Aire acondicionado split en todos los ambientes',
    'Doble Vidrio Hermético (DVH)',
    'Apto crédito hipotecario',
    'Apto profesional',
    'Acepta mascotas',
    'Baulera individual'
  ],
  amenities: [
    'Piscina y Solárium',
    'SUM con parrilla techada',
    'Cochera fija cubierta',
    'Seguridad / Tótem 24hs',
    'Laundry',
    'Grupo electrógeno',
    'Cámaras de vigilancia',
    'Gimnasio'
  ],
  photos: [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      title: 'Living Comedor Principal',
      description: 'Living apaisado con salida al balcón corrido, pisos de madera y excelente luz natural.',
      tag: 'Living Comedor'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      title: 'Cocina con Comedor Diario',
      description: 'Muebles de categoría, mesada de Silestone y espacio de comedor diario.',
      tag: 'Cocina Equipada'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      title: 'Dormitorio Principal',
      description: 'Dormitorio amplio y silencioso con placares de piso a techo y sol de mañana.',
      tag: 'Dormitorio 1'
    },
    {
      id: 4,
      url: '/anuncio-tribu.jpg',
      title: '¡Habitación del Nuevo Integrante! 🍼',
      description: '¡Sorpresa única! La mejor noticia de todas para la familia.',
      isSurprise: true,
      tag: '¡Foto Especial!'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      title: 'Balcón Corrido al Contrafrente',
      description: 'Vista abierta a pulmón de manzana arbolado, silencioso y con gran luminosidad.',
      tag: 'Balcón'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
      title: 'Amenities: Terraza con Pileta & Solárium',
      description: 'Piscina en el último piso con vistas panorámicas de Belgrano y sol todo el día.',
      tag: 'Amenities'
    }
  ],
  agent: {
    name: 'Gabriel Bellino',
    agency: 'Bellino & Familia Propiedades',
    license: 'CUCICBA Mat. 7842',
    phone: '+54 9 11 5555-4321',
    email: 'contacto@bellinopropiedades.com.ar',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    verified: true
  }
};
