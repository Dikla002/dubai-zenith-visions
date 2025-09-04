import React from 'react';

const posts = [
  {
    title: 'Dubai market update – Q3 insights',
    date: 'Sep 14, 2024',
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=600&h=350&fit=crop',
  },
  {
    title: 'Where to invest next in Marina and JBR',
    date: 'Aug 28, 2024',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&h=350&fit=crop',
  },
  {
    title: 'Off-plan launches to watch this month',
    date: 'Aug 10, 2024',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=350&fit=crop',
  },
];

const NewsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-luxury-navy">Latest News & Insights</h3>
          <a href="#" className="text-primary text-sm">View all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="border border-border rounded-xl overflow-hidden bg-white hover:shadow-elevated transition-smooth">
              <img 
                src={p.image + '&auto=format&q=60'} 
                alt="" 
                loading="lazy"
                decoding="async"
                className="w-full h-44 object-cover" 
              />
              <div className="p-5">
                <div className="text-xs text-luxury-gray-light mb-2">{p.date}</div>
                <h4 className="font-semibold text-luxury-navy mb-2 line-clamp-2">{p.title}</h4>
                <a href="#" className="text-primary text-sm">Read more</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;


