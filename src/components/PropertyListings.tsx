import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSearch } from '@/contexts/SearchContext';
import { Link } from 'react-router-dom';
import { properties as data } from '@/data/properties';
import { useFavorites } from '@/contexts/FavoritesContext';

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
  const { filters } = useSearch();
  const [currency, setCurrency] = useState<'aed' | 'usd'>('aed');
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  // Use centralized sample data
  const properties: Property[] = data.map(p => ({
    ...p,
    image: p.image.replace('1400&h=800', '500&h=300'),
  }));

  const formatPrice = (price: { aed: number; usd: number }) => {
    const amount = currency === 'aed' ? price.aed : price.usd;
    const currencySymbol = currency === 'aed' ? 'AED' : '$';
    
    if (amount >= 1000000) {
      return `${currencySymbol} ${(amount / 1000000).toFixed(1)}M`;
    }
    return `${currencySymbol} ${amount.toLocaleString()}`;
  };

  // favorites handled by context

  const matchesFilters = (p: Property) => {
    const query = (filters.searchQuery || '').toLowerCase();
    const inQuery = !query || p.title.toLowerCase().includes(query) || p.location.toLowerCase().includes(query) || p.type.toLowerCase().includes(query);
    const byType = !filters.propertyType || p.type.toLowerCase() === filters.propertyType.toLowerCase();
    const byLocation = !filters.location || p.location.toLowerCase().includes(filters.location.replace('-', ' '));
    const byPrice = (() => {
      if (!filters.priceRange) return true;
      const [minStr, maxStr] = filters.priceRange.split('-');
      const min = parseInt(minStr.replace(/\D/g, '')) * (filters.priceRange.includes('m') ? 1_000_000 : 1_000);
      const max = maxStr?.includes('m') ? parseInt(maxStr.replace(/\D/g, '')) * 1_000_000 : parseInt(maxStr?.replace(/\D/g, '') || '0') * 1_000;
      const val = p.price.aed;
      if (filters.priceRange.endsWith('+')) return val >= min;
      return val >= min && (!!max ? val <= max : true);
    })();
    const byArea = (() => {
      if (!filters.area) return true;
      if (filters.area.endsWith('+')) return p.sqft >= parseInt(filters.area);
      const [min, max] = filters.area.split('-').map((n) => parseInt(n));
      return p.sqft >= min && p.sqft <= max;
    })();
    // category currently not restricting; can plug into data when category available
    return inQuery && byType && byLocation && byPrice && byArea;
  };

  return (
    <section id="properties" className="py-20 bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-end justify-between">
            <div>
              <h2 className={`text-2xl md:text-3xl font-bold text-luxury-navy ${
                direction === 'rtl' ? 'font-arabic' : ''
              }`}>
                Featured properties list
              </h2>
              <p className="text-sm md:text-base text-luxury-gray-light mt-2">
                Explore our curated selection of listings across Dubai’s prime communities.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center bg-white hover:bg-surface-elevated transition-smooth" aria-label="Previous">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center bg-white hover:bg-surface-elevated transition-smooth" aria-label="Next">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Currency Toggle */}
          <div className="mt-6">
            <div className="inline-flex bg-white rounded-lg p-1 shadow-card">
              <button
                onClick={() => setCurrency('aed')}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-smooth ${
                  currency === 'aed' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-luxury-gray hover:text-primary'
                }`}
              >
                {t('currency.aed')}
              </button>
              <button
                onClick={() => setCurrency('usd')}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-smooth ${
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
          {properties.filter(matchesFilters).map((property) => (
            <Card key={property.id} className="property-card group">
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image + '&auto=format&q=60'} 
                  alt={property.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
                    isFavorite(property.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-luxury-gray hover:bg-white hover:text-red-500'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${
                    isFavorite(property.id) ? 'fill-current' : ''
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
                <Link to={`/property/${property.id}`} className="w-full">
                  <Button 
                    className="w-full cta-secondary group"
                    variant="outline"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    {t('properties.view')}
                  </Button>
                </Link>
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