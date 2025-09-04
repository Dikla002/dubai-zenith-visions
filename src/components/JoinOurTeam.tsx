import React from 'react';
import { Button } from '@/components/ui/button';

const JoinOurTeam = () => {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80&auto=format&fit=crop')] bg-cover bg-center">
      <div className="bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center text-center text-white gap-4">
          <h3 className="text-2xl md:text-3xl font-bold">Join our team</h3>
          <p className="text-white/80 max-w-2xl">We are growing fast. Join a high-performing team shaping Dubai real estate.</p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Button className="cta-primary px-6">Job openings</Button>
            <Button variant="outline" className="border-white/40 text-white hover:bg-white hover:text-luxury-navy px-6">Our team</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;


