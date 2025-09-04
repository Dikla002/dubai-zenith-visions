import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Heart, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Property {
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
}

const PropertyListings = () => {
  const { t, direction } = useLanguage();
  const [currency, setCurrency] = useState<'aed' | 'usd'>('aed');
  const [favorites, setFavorites] = useState<string[]>([]);

  // Sample properties data
  const properties: Property[] = [
    {
      id: '1',
      title: 'Luxury Penthouse in Downtown',
      location: 'Downtown Dubai',
      price: { aed: 3500000, usd: 952000 },
      bedrooms: 3,
      bathrooms: 4,
      sqft: 2800,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop',
      type: 'Penthouse',
      featured: true,
    },
    {
      id: '2',
      title: 'Modern Villa with Marina View',
      location: 'Dubai Marina',
      price: { aed: 4200000, usd: 1142000 },
      bedrooms: 4,
      bathrooms: 5,
      sqft: 3500,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop',
      type: 'Villa',
      featured: true,
    },
    {
      id: '3',
      title: 'Elegant Apartment in JBR',
      location: 'Jumeirah Beach Residence',
      price: { aed: 2100000, usd: 571000 },
      bedrooms: 2,
      bathrooms: 3,
      sqft: 1850,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=300&fit=crop',
      type: 'Apartment',
    },
    {
      id: '4',
      title: 'Waterfront Townhouse',
      location: 'Palm Jumeirah',
      price: { aed: 6800000, usd: 1850000 },
      bedrooms: 5,
      bathrooms: 6,
      sqft: 4200,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop',
      type: 'Townhouse',
      featured: true,
    },
    {
      id: '5',
      title: 'Contemporary Studio',
      location: 'Business Bay',
      price: { aed: 850000, usd: 231000 },
      bedrooms: 0,
      bathrooms: 1,
      sqft: 650,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop',
      type: 'Studio',
    },
    {
      id: '6',
      title: 'Luxury Duplex in JLT',
      location: 'Jumeirah Lakes Towers',
      price: { aed: 2800000, usd: 761000 },
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2400,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop',
      type: 'Duplex',
    },
  ];

  const formatPrice = (price: { aed: number; usd: number }) => {
    const amount = currency === 'aed' ? price.aed : price.usd;
    const currencySymbol = currency === 'aed' ? 'AED' : '$';
    
    if (amount >= 1000000) {
      return `${currencySymbol} ${(amount / 1000000).toFixed(1)}M`;
    }
    return `${currencySymbol} ${amount.toLocaleString()}`;
  };

  const toggleFavorite = (propertyId: string) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  return (
    <section id="properties" className="py-20 bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-luxury-navy mb-4 ${
            direction === 'rtl' ? 'font-arabic' : ''
          }`}>
            {t('properties.title')}
          </h2>
          <p className="text-xl text-luxury-gray-light max-w-2xl mx-auto">
            {t('properties.subtitle')}
          </p>
          
          {/* Currency Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="bg-white rounded-lg p-1 shadow-card">
              <button
                onClick={() => setCurrency('aed')}
                className={`px-6 py-2 rounded-md font-medium transition-smooth ${
                  currency === 'aed' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-luxury-gray hover:text-primary'
                }`}
              >
                {t('currency.aed')}
              </button>
              <button
                onClick={() => setCurrency('usd')}
                className={`px-6 py-2 rounded-md font-medium transition-smooth ${
                  currency === 'usd' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-luxury-gray hover:text-primary'
                }`}
              >
                {t('currency.usd')}
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="property-card group">
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {property.featured && (
                    <Badge className="bg-primary text-white">Featured</Badge>
                  )}
                  <Badge variant="secondary" className="bg-white/90 text-luxury-navy">
                    {property.type}
                  </Badge>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-smooth ${
                    favorites.includes(property.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-luxury-gray hover:bg-white hover:text-red-500'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${
                    favorites.includes(property.id) ? 'fill-current' : ''
                  }`} />
                </button>
              </div>

              <CardContent className="p-6">
                {/* Price */}
                <div className="text-2xl font-bold text-primary mb-2">
                  {formatPrice(property.price)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-luxury-navy mb-2 line-clamp-1">
                  {property.title}
                </h3>

                {/* Location */}
                <div className="flex items-center text-luxury-gray-light mb-4">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="flex items-center justify-between text-sm text-luxury-gray">
                  <div className="flex items-center space-x-4">
                    {property.bedrooms > 0 && (
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>{property.bedrooms} {t('properties.bedrooms')}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms} {t('properties.bathrooms')}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.sqft.toLocaleString()} {t('properties.sqft')}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button 
                  className="w-full cta-secondary group"
                  variant="outline"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  {t('properties.view')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="cta-primary px-8">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;