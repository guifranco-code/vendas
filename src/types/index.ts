export interface Typology {
  id: string;
  name: string;
  size: number;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  parkingSpots: number;
  highlight: string;
  description: string;
  features: string[];
  dimensions: {
    living: string;
    terrace: string;
    masterSuite: string;
    kitchen: string;
  };
}

export interface Amenity {
  id: string;
  title: string;
  category: 'rooftop' | 'wellness' | 'social' | 'sports';
  description: string;
  image?: string;
  tag: string;
}

export interface LocationPoint {
  id: string;
  name: string;
  category: 'gastronomia' | 'lazer' | 'saude' | 'mobilidade';
  time: string;
  distance: string;
  detail: string;
}
