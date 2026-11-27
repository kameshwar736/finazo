import { useEffect, useRef } from 'react';

/**
 * useReveal hook:
 * Observes all elements matching .reveal-up, .reveal-left, .reveal-right, .reveal-zoom
 * inside the referenced container using an IntersectionObserver with:
 * - threshold: 0.15
 * - rootMargin: "0px 0px -60px 0px"
 * When an element enters the viewport, adds `.is-visible` and unobserves it.
 * Respects prefers-reduced-motion.
 */
export function useReveal(customRef = null) {
  const localRef = useRef(null);
  const containerRef = customRef || localRef;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = el.querySelectorAll(
      '.reveal-up, .reveal-left, .reveal-right, .reveal-zoom'
    );

    if (reduce || !('IntersectionObserver' in window)) {
      elements.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    elements.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [containerRef]);

  return containerRef;
}

export default useReveal;
