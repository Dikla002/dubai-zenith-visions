import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // small delay to ensure the target is on the page after navigation
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }, [location]);

  return null;
};

export default HashScroll;


