"use client";

import { useEffect, useState } from "react";

interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const [ref, setRef] = useState<Element | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.unobserve(ref);
        } else {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, triggerOnce]);

  return { ref: setRef, isInView };
}
