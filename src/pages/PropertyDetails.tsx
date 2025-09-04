import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPropertyById } from '@/data/properties';
import { Bed, Bath, Square, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = useMemo(() => (id ? getPropertyById(id) : undefined), [id]);

  if (!property) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Property not found</h1>
          <Link to="/" className="text-primary">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <img 
          src={property.image + '&auto=format&q=60'} 
          alt={property.title} 
          className="w-full h-[420px] object-cover" 
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
          <div className="text-white">
            <div className="mb-2 inline-flex bg-primary/90 px-3 py-1 rounded text-sm">{property.type}</div>
            <h1 className="text-3xl md:text-4xl font-bold">{property.title}</h1>
            <div className="flex items-center mt-2 text-white/80">
              <MapPin className="h-4 w-4 mr-2" /> {property.location}
            </div>
          </div>
        </div>
        <div className="absolute top-6 left-6">
          <Link to="/">
            <Button variant="outline" className="bg-white/90 backdrop-blur border-white/60"><ArrowLeft className="h-4 w-4 mr-2"/>Back</Button>
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-luxury-gray mb-6">{property.description}</p>

            <div className="grid grid-cols-3 gap-4">
              <div className="border border-border rounded-lg p-4 flex items-center gap-2">
                <Bed className="h-5 w-5" />
                <div>
                  <div className="text-sm text-luxury-gray-light">Bedrooms</div>
                  <div className="font-semibold">{property.bedrooms}</div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 flex items-center gap-2">
                <Bath className="h-5 w-5" />
                <div>
                  <div className="text-sm text-luxury-gray-light">Bathrooms</div>
                  <div className="font-semibold">{property.bathrooms}</div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 flex items-center gap-2">
                <Square className="h-5 w-5" />
                <div>
                  <div className="text-sm text-luxury-gray-light">Sq Ft</div>
                  <div className="font-semibold">{property.sqft.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="border border-border rounded-xl p-5 sticky top-6">
              <div className="text-2xl font-bold text-primary mb-4">AED {property.price.aed.toLocaleString()}</div>
              <Button className="w-full cta-primary mb-3">Request viewing</Button>
              <Button variant="outline" className="w-full" onClick={() => window.alert('Agent will contact you shortly')}>Contact agent</Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;


