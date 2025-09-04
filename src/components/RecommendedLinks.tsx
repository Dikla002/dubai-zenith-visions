import React from 'react';

const columns = [
  [
    'Properties for Sale in Dubai',
    'Properties for Rent in Dubai',
    'Properties for Sale in Palm Jumeirah',
    'Properties for Sale in Downtown',
  ],
  [
    'Properties for Sale in Dubai Marina',
    'Properties for Sale in Business Bay',
    'Properties for Sale in JBR',
    'Properties for Sale in JLT',
  ],
  [
    'Properties for Rent in Business Bay',
    'Properties for Rent in Downtown Dubai',
    'Properties for Rent in Dubai Marina',
    'Properties for Rent in Business Bay',
  ],
];

const RecommendedLinks = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-8">
          <div className="min-w-[140px] text-right pr-4">
            <div className="text-3xl font-bold text-luxury-navy">We</div>
            <div className="text-3xl font-bold text-luxury-navy">recommended</div>
            <div className="text-3xl font-bold text-luxury-navy">that you take</div>
            <div className="text-3xl font-bold text-luxury-navy">a look</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-3">
                {col.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-luxury-gray hover:text-primary transition-smooth text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedLinks;


