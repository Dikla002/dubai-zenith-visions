import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const groups = [
  {
    title: 'Dubai Guides',
    items: [
      'Downtown Dubai',
      'Dubai Marina',
      'Palm Jumeirah',
      'Business Bay',
      'JBR',
      'Jumeirah Lakes Towers',
    ],
  },
  {
    title: 'Lifestyle Guides',
    items: [
      'Beachfront Residences',
      'Golf Course Communities',
      'Waterfront Residences',
      'Family-Friendly Areas',
      'Luxury Penthouses',
      'Investment Hotspots',
    ],
  },
  {
    title: 'Buyer Resources',
    items: [
      'Off-plan Buying Guide',
      'Mortgage Guide (Expats)',
      'RERA & Legal Basics',
      'Fees & Taxes Overview',
      'Golden Visa via Property',
      'Ownership for Foreigners',
    ],
  },
];

const CommunityGuides = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl font-bold text-luxury-navy text-center mb-10">Dubai Community Guides</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((group, idx) => (
            <div key={idx} className="border border-border rounded-xl">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span className="font-semibold text-luxury-navy">{group.title}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${open === idx ? 'rotate-180' : ''}`} />
              </button>
              {open === idx && (
                <div className="px-4 pb-4">
                  <ul className="space-y-3">
                    {group.items.map((item, i) => (
                      <li key={i}>
                        <a href="#" className="text-luxury-gray hover:text-primary transition-smooth text-sm">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityGuides;


