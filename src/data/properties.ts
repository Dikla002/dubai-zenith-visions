export interface Property {
  id: string;
  title: string;
  location: string;
  price: { aed: number; usd: number };
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  type: string;
  featured?: boolean;
  description?: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Penthouse in Downtown',
    location: 'Downtown Dubai',
    price: { aed: 3500000, usd: 952000 },
    bedrooms: 3,
    bathrooms: 4,
    sqft: 2800,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&h=800&fit=crop',
    type: 'Penthouse',
    featured: true,
    description:
      'An exquisite penthouse boasting panoramic Burj Khalifa views, premium finishes, and private terrace.',
  },
  {
    id: '2',
    title: 'Modern Villa with Marina View',
    location: 'Dubai Marina',
    price: { aed: 4200000, usd: 1142000 },
    bedrooms: 4,
    bathrooms: 5,
    sqft: 3500,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&h=800&fit=crop',
    type: 'Villa',
    featured: true,
    description:
      'Contemporary waterfront villa with floor-to-ceiling glass, private pool, and maids room.',
  },
  {
    id: '3',
    title: 'Elegant Apartment in JBR',
    location: 'Jumeirah Beach Residence',
    price: { aed: 2100000, usd: 571000 },
    bedrooms: 2,
    bathrooms: 3,
    sqft: 1850,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1400&h=800&fit=crop',
    type: 'Apartment',
    description:
      'Steps from the beach, this immaculate apartment offers a bright layout and sea views.',
  },
  {
    id: '4',
    title: 'Waterfront Townhouse',
    location: 'Palm Jumeirah',
    price: { aed: 6800000, usd: 1850000 },
    bedrooms: 5,
    bathrooms: 6,
    sqft: 4200,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&h=800&fit=crop',
    type: 'Townhouse',
    featured: true,
    description:
      'Spacious townhouse with direct waterfront access, landscaped garden, and roof terrace.',
  },
  {
    id: '5',
    title: 'Contemporary Studio',
    location: 'Business Bay',
    price: { aed: 850000, usd: 231000 },
    bedrooms: 0,
    bathrooms: 1,
    sqft: 650,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&h=800&fit=crop',
    type: 'Studio',
    description:
      'High-yield studio in the heart of Business Bay with canal-side promenade access.',
  },
  {
    id: '6',
    title: 'Luxury Duplex in JLT',
    location: 'Jumeirah Lakes Towers',
    price: { aed: 2800000, usd: 761000 },
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2400,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&h=800&fit=crop',
    type: 'Duplex',
    description:
      'Bright duplex residence with double-height living room and skyline views over the lakes.',
  },
];

export const getPropertyById = (id: string) => properties.find((p) => p.id === id);


