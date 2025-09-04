import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, direction, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.properties', href: '#properties' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-xl font-bold text-luxury-navy">
              Tatweer Aldar
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-luxury-gray hover:text-primary transition-smooth font-medium"
                >
                  {t(item.key)}
                </a>
              ))}
              <a href="/favorites" className="text-luxury-gray hover:text-primary transition-smooth font-medium">Favorites</a>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center text-green-600 font-medium hover:opacity-80"
            >
              <PhoneCall className="h-4 w-4 mr-1" /> WhatsApp
            </a>
            <Button className="hidden md:inline-flex cta-primary h-9 px-4" onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}>List Your Property</Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-luxury-gray hover:text-primary"
            >
              <Globe className="h-4 w-4" />
              <span className="font-medium">{language.toUpperCase()}</span>
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-luxury-gray"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-luxury-gray hover:text-primary hover:bg-surface-subtle transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;