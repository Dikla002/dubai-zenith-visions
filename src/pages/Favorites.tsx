import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useFavorites } from '@/contexts/FavoritesContext';
import { properties } from '@/data/properties';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Square, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites, clearFavorites } = useFavorites();
  const favoriteProps = properties.filter(p => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-surface-subtle">
      <Navigation />
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-luxury-navy">My Favorites</h1>
            {favoriteProps.length > 0 && (
              <Button variant="outline" onClick={clearFavorites} className="flex items-center">
                <Heart className="h-4 w-4 mr-2" /> Clear all
              </Button>
            )}
          </div>

          {favoriteProps.length === 0 ? (
            <div className="bg-white border border-border rounded-xl p-8 text-center">
              <p className="text-luxury-gray mb-4">You haven’t added any favorites yet.</p>
              <Link to="/">
                <Button className="cta-primary">Browse properties</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favoriteProps.map((property) => (
                <Card key={property.id} className="property-card group">
                  <div className="relative overflow-hidden">
                    <img
                      src={property.image + '&auto=format&q=60'}
                      alt={property.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <Badge variant="secondary" className="bg-white/90 text-luxury-navy">
                        {property.type}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-primary mb-2">AED {property.price.aed.toLocaleString()}</div>
                    <h3 className="text-xl font-semibold text-luxury-navy mb-2 line-clamp-1">{property.title}</h3>
                    <div className="flex items-center text-luxury-gray-light mb-4">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{property.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-luxury-gray">
                      <div className="flex items-center space-x-4">
                        {property.bedrooms > 0 && (
                          <div className="flex items-center"><Bed className="h-4 w-4 mr-1" />{property.bedrooms} Bedrooms</div>
                        )}
                        <div className="flex items-center"><Bath className="h-4 w-4 mr-1" />{property.bathrooms} Bathrooms</div>
                      </div>
                      <div className="flex items-center"><Square className="h-4 w-4 mr-1" />{property.sqft.toLocaleString()} Sq Ft</div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Link to={`/property/${property.id}`} className="w-full">
                      <Button className="w-full cta-secondary" variant="outline">
                        <Eye className="h-4 w-4 mr-2" /> View details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Favorites;


