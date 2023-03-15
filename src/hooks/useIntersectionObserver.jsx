import { useEffect, useState } from 'react';

const useIntersectionObserver = (loadMore) => {
  const [lastNode, setLastNode] = useState();

  useEffect(() => {
    if (lastNode) {
      // console.log('last node', lastNode);

      const lastObserver = new IntersectionObserver((entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          loadMore();
          lastObserver.unobserve(lastNode);
        }
      }, {});

      lastObserver.observe(lastNode);
    }
  }, [lastNode]);

  return { setLastNode };
};

export default useIntersectionObserver;
