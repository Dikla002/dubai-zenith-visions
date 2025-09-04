import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'A. Johnson',
    role: 'Buyer – Downtown',
    text: 'Seamless experience from search to transfer. Transparent and responsive team.',
  },
  {
    name: 'M. Al-Farsi',
    role: 'Investor – Marina',
    text: 'Excellent market advice and access to off-plan launches before public.',
  },
  {
    name: 'S. Chen',
    role: 'Seller – Palm',
    text: 'They marketed our villa brilliantly and closed above asking swiftly.',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl font-bold text-luxury-navy text-center mb-10">Client Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-border rounded-xl p-6 bg-surface-elevated">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 text-primary fill-current" />
                ))}
              </div>
              <p className="text-luxury-gray mb-4">{t.text}</p>
              <div className="text-sm font-semibold text-luxury-navy">{t.name}</div>
              <div className="text-xs text-luxury-gray-light">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


