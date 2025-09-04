import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PropertySearch from '@/components/PropertySearch';
import PropertyListings from '@/components/PropertyListings';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import CommunityGuides from '@/components/CommunityGuides';
import CTAListProperty from '@/components/CTAListProperty';
import Testimonials from '@/components/Testimonials';
import JoinOurTeam from '@/components/JoinOurTeam';
import NewsSection from '@/components/NewsSection';
import FAQs from '@/components/FAQs';
import RecommendedLinks from '@/components/RecommendedLinks';
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
      <FeaturesSection />
      <CommunityGuides />
      <CTAListProperty />
      <Testimonials />
      <JoinOurTeam />
      <NewsSection />
      <FAQs />
      <RecommendedLinks />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
