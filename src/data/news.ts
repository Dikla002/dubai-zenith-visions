export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

export const newsPosts: NewsPost[] = [
  {
    slug: 'dubai-market-update-q3-insights',
    title: 'Dubai market update – Q3 insights',
    date: 'Sep 14, 2024',
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1400&h=800&fit=crop',
    excerpt: 'Key performance indicators across prime communities and what to expect in Q4.',
    content:
      'Dubai real estate continued its strong trajectory in Q3 with increased transaction volumes across prime and mid-market segments. Buyer demand for waterfront and family-centric communities remained resilient, while off-plan launches saw robust absorption...'
  },
  {
    slug: 'where-to-invest-next-in-marina-and-jbr',
    title: 'Where to invest next in Marina and JBR',
    date: 'Aug 28, 2024',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1400&h=800&fit=crop',
    excerpt: 'A tactical look at yields, demand drivers, and inventory for investors.',
    content:
      'Marina and JBR remain among the most liquid submarkets with sustained rental demand. Investors are prioritizing renovated stock and turnkey products with strong community amenities. Our analysis covers yield bands by tower and outlook for the next 12 months...'
  },
  {
    slug: 'off-plan-launches-to-watch-this-month',
    title: 'Off-plan launches to watch this month',
    date: 'Aug 10, 2024',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1400&h=800&fit=crop',
    excerpt: 'Upcoming releases with compelling payment plans and locations.',
    content:
      'Developers are unveiling several noteworthy off-plan projects featuring attractive payment schedules and lifestyle amenities. We break down the strongest propositions by location, developer track record, and likely resale demand at handover...'
  },
];

export const getNewsBySlug = (slug: string) => newsPosts.find(n => n.slug === slug);


