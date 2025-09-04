import React from 'react';
import { ArrowRight, UploadCloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTAListProperty = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">List Your Property</h3>
              <p className="text-white/80">Reach verified buyers and tenants with our marketing engine powered by Bitrix24 CRM.</p>
            </div>
            <Button className="cta-primary px-6 py-6 text-base flex items-center" onClick={() => window.alert('Listing form coming soon')}>
              <UploadCloud className="h-5 w-5 mr-2" />
              List Your Property
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAListProperty;


