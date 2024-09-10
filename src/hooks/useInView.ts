import { RefObject, useEffect, useState } from 'react';

interface UseInViewProps {
  ref: RefObject<HTMLElement>;
  threshold: number;
}

function useInView({ ref, threshold }: UseInViewProps) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (! ref.current)
      return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView((prevState) => {
          if (prevState === entry.isIntersecting)
            return prevState;

          return entry.isIntersecting;
        });
      });
    }, {
      threshold: threshold,
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return { inView };
}

export default useInView;
