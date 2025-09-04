import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'How do I get a mortgage as an expat?', a: 'We partner with leading banks and guide you through eligibility, pre-approval, and valuation.' },
  { q: 'What fees should I expect when buying?', a: 'Transfer fee, agency fee, DLD registration, trustee fee, and mortgage fees where applicable.' },
  { q: 'What is the process for off-plan purchases?', a: 'Reservation, SPA signing, payment plan schedules, handover, and final DLD registration.' },
  { q: 'Can property purchase qualify me for a Golden Visa?', a: 'Yes, subject to minimum investment thresholds; our team will assist end-to-end.' },
  { q: 'Do you handle property management?', a: 'Yes, from snagging and handover to leasing, renewals, and maintenance coordination.' },
];

const FAQs = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-surface-subtle py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-3xl font-bold text-luxury-navy text-center mb-8">FAQs</h3>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white border border-border rounded-xl">
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium text-luxury-navy">{f.q}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-luxury-gray">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;


