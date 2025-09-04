import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { newsPosts } from '@/data/news';
import { Link } from 'react-router-dom';

const NewsList = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-luxury-navy">Latest News & Insights</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsPosts.map((p) => (
              <article key={p.slug} className="border border-border rounded-xl overflow-hidden bg-white hover:shadow-elevated transition-smooth">
                <img src={p.image + '&auto=format&q=60'} alt="" className="w-full h-44 object-cover" loading="lazy" decoding="async" />
                <div className="p-5">
                  <div className="text-xs text-luxury-gray-light mb-2">{p.date}</div>
                  <h2 className="font-semibold text-luxury-navy mb-2 line-clamp-2">{p.title}</h2>
                  <p className="text-sm text-luxury-gray mb-4 line-clamp-2">{p.excerpt}</p>
                  <Link to={`/news/${p.slug}`} className="text-primary text-sm">Read more</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NewsList;


