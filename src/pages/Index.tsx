import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PropertySearch from '@/components/PropertySearch';
import PropertyListings from '@/components/PropertyListings';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Property Search - Positioned over hero */}
      <div className="relative -mt-20 z-20">
        <PropertySearch />
      </div>
      
      <PropertyListings />
      <AboutSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
