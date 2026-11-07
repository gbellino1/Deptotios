export interface Photo {
  id: number;
  url: string;
  title: string;
  description: string;
  isSurprise?: boolean;
  tag?: string;
}

export interface PropertyData {
  id: string;
  code: string;
  title: string;
  operation: 'Venta' | 'Alquiler';
  propertyType: string;
  priceUSD: number;
  expensesARS: number;
  expensesUSDApprox: number;
  ablARS: number;
  address: string;
  neighborhood: string;
  city: string;
  totalArea: number;
  coveredArea: number;
  rooms: number;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  ageYears: number;
  disposition: string;
  orientation: string;
  publishedDaysAgo: number;
  viewsCount: number;
  description: string;
  features: string[];
  amenities: string[];
  photos: Photo[];
  agent: {
    name: string;
    agency: string;
    license: string;
    phone: string;
    email: string;
    avatar: string;
    verified: boolean;
  };
}
