import React, { useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getNewsBySlug } from '@/data/news';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsPost = () => {
  const { slug } = useParams();
  const post = useMemo(() => (slug ? getNewsBySlug(slug) : undefined), [slug]);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <h1 className="text-2xl font-semibold mb-4">Article not found</h1>
          <Link to="/news" className="text-primary">Back to News</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <article className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <a href="/#latest-news">
              <Button variant="outline"><ArrowLeft className="h-4 w-4 mr-2"/>Back to Latest News</Button>
            </a>
          </div>
          <img src={post.image + '&auto=format&q=60'} alt="" className="w-full h-72 object-cover rounded-xl mb-6" />
          <div className="text-xs text-luxury-gray-light mb-2">{post.date}</div>
          <h1 className="text-3xl font-bold text-luxury-navy mb-4">{post.title}</h1>
          <p className="text-luxury-gray leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default NewsPost;


