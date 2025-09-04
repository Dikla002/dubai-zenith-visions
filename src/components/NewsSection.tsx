import React from 'react';
import { Link } from 'react-router-dom';
import { newsPosts } from '@/data/news';

const posts = newsPosts.slice(0, 3);

const NewsSection = () => {
  return (
    <section id="latest-news" className="bg-white py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-luxury-navy">Latest News & Insights</h3>
          <Link to="/news" className="text-primary text-sm">View all</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="border border-border rounded-xl overflow-hidden bg-white hover:shadow-elevated transition-smooth">
              <img src={p.image + '&auto=format&q=60'} alt="" loading="lazy" decoding="async" className="w-full h-44 object-cover" />
              <div className="p-5">
                <div className="text-xs text-luxury-gray-light mb-2">{p.date}</div>
                <h4 className="font-semibold text-luxury-navy mb-2 line-clamp-2">{p.title}</h4>
                <Link to={`/news/${p.slug}`} className="text-primary text-sm">Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;


