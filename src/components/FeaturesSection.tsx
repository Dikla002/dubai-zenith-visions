import React from 'react';
import { ShieldCheck, Handshake, Building2, Globe2 } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Trusted & Certified',
    desc: 'RERA certified advisors ensuring safe and transparent transactions.',
  },
  {
    icon: Handshake,
    title: 'Personalized Service',
    desc: 'White-glove, end-to-end support tailored to your goals.',
  },
  {
    icon: Building2,
    title: 'Prime Inventory',
    desc: 'Access to Dubai’s premier off-plan and resale properties.',
  },
  {
    icon: Globe2,
    title: 'Bilingual Experts',
    desc: 'English/Arabic specialists with deep local market knowledge.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-luxury-navy/95 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4 bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">{f.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


