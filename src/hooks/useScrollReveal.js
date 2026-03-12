import { useEffect, useRef } from 'react';

/**
 * Attach this to any container to have children with
 * className="reveal" animate in when they enter the viewport.
 *
 * @param {Array} deps - Optional dependency array. When deps change, .visible is
 *   removed from all targets and items re-animate as they scroll into view.
 *   Pass an empty array (default) to run once on mount.
 */
// eslint-disable-next-line react-hooks/exhaustive-deps
export function useScrollReveal(deps = []) {
  const ref = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll('.reveal');
    if (!targets.length) return;

    // Reset visibility so items re-animate when deps change (e.g., after a filter change)
    targets.forEach((t) => t.classList.remove('visible'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, deps);

  return ref;
}
