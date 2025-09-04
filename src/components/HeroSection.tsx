import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/dubai-skyline-hero.jpg';

const HeroSection = () => {
  const { t, direction } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className={`hero-title mb-6 ${direction === 'rtl' ? 'font-arabic' : 'font-inter'}`}>
            {t('hero.title')}
            <br />
            <span className="text-white/90 text-3xl md:text-4xl lg:text-5xl">
              {t('hero.subtitle')}
            </span>
            <br />
            <span className="text-primary">
              {t('hero.expertise')}
            </span>
          </h1>

          {/* Description */}
          <p className={`text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto ${
            direction === 'rtl' ? 'font-arabic' : ''
          }`}>
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="cta-primary px-8 py-4 text-lg font-semibold group"
            >
              {t('hero.cta.primary')}
              <ArrowRight className={`ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 ${
                direction === 'rtl' ? 'rtl-flip' : ''
              }`} />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="cta-secondary border-white/30 text-white hover:bg-white hover:text-luxury-navy px-8 py-4 text-lg font-semibold group"
            >
              <Play className={`mr-2 h-5 w-5 ${direction === 'rtl' ? 'rtl-flip' : ''}`} />
              {t('hero.cta.secondary')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2 text-white/70">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-sm font-medium">{t('trust.bitrix24')}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-white/70">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span className="text-sm font-medium">{t('trust.certified')}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-white/70">
              <div className="w-8 h-8 bg-luxury-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">5+</span>
              </div>
              <span className="text-sm font-medium">{t('trust.experience')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;