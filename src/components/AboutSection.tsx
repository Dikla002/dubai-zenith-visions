import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, MapPin, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t, direction } = useLanguage();

  const stats = [
    { icon: Award, value: '500+', label: 'Properties Sold' },
    { icon: Users, value: '1200+', label: 'Happy Clients' },
    { icon: MapPin, value: '15+', label: 'Dubai Areas Covered' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
  ];

  const certifications = [
    'RERA Certified',
    'Dubai Real Estate Institute',
    'Bitrix24 Gold Partner',
    'US Real Estate Licensed',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <Badge className="bg-primary/10 text-primary mb-4">About Us</Badge>
              <h2 className={`text-4xl md:text-5xl font-bold text-luxury-navy mb-6 ${
                direction === 'rtl' ? 'font-arabic' : ''
              }`}>
                {t('about.title')}
              </h2>
              <p className="text-xl text-luxury-gray-light leading-relaxed mb-6">
                {t('about.description')}
              </p>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-luxury-navy mb-4">Certifications & Partnerships</h3>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-luxury-gray text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="cta-primary group">
              {t('about.cta')}
              <ArrowRight className={`ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 ${
                direction === 'rtl' ? 'rtl-flip' : ''
              }`} />
            </Button>
          </div>

          {/* Stats & Visual Elements */}
          <div className="relative">
            {/* Background Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" 
                alt="Dubai skyline" 
                className="w-full h-96 object-cover rounded-2xl shadow-elevated"
              />
              
              {/* Overlay Card */}
              <Card className="absolute -bottom-8 -left-8 bg-white shadow-luxury">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-luxury-navy">5+ Years</div>
                      <div className="text-luxury-gray-light text-sm">Dubai Excellence</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats Grid */}
            <div className="mt-16 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="shadow-card hover:shadow-elevated transition-luxury">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-luxury-navy mb-2">{stat.value}</div>
                    <div className="text-luxury-gray-light text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Company Vision */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-hero text-white shadow-luxury">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                To become Dubai's most trusted real estate partner by combining American excellence 
                with local expertise, delivering exceptional value and service to every client in 
                their property journey.
              </p>
              <div className="mt-8 flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-white/80">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-white/80">Transparent</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">Expert</div>
                  <div className="text-white/80">Guidance</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;