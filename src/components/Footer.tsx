import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Globe,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, direction, language, setLanguage } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { label: 'Properties', href: '#properties' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { label: t('footer.privacy'), href: '#' },
    { label: t('footer.terms'), href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR Compliance', href: '#' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <footer className="bg-luxury-navy text-white">
      {/* Newsletter Section */}
      <div className="bg-luxury-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Dubai Real Estate</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Get the latest property listings, market insights, and exclusive deals delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
              />
              <Button className="cta-primary h-12 px-6">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Tatweer Aldar</h3>
              <p className="text-white/80 mb-4">{t('footer.description')}</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Business Bay, Level 25, Conrad Hotel Office Tower, Dubai, UAE
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-white/80 text-sm">+971 4 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-white/80 text-sm">info@tatweeraldar.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-luxury"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Dubai Areas</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-primary transition-smooth text-sm">Downtown Dubai</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-smooth text-sm">Dubai Marina</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-smooth text-sm">Palm Jumeirah</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-smooth text-sm">Business Bay</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-smooth text-sm">JBR</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition-smooth text-sm">Jumeirah Lakes Towers</a></li>
            </ul>
          </div>

          {/* Legal & Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal & Certifications</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Certifications */}
            <div className="mt-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <span className="text-white/80 text-sm">RERA Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">B</span>
                </div>
                <span className="text-white/80 text-sm">Bitrix24 Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 {t('footer.company')}. {t('footer.rights')}
            </div>
            
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-white/80 hover:text-primary hover:bg-white/10 flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;