import { useEffect, useRef } from "react";

/**
 * Plays a <video> only while it's in (or near) the viewport, and pauses it
 * as soon as it scrolls out. Keeps five independent reels from all
 * auto-playing at once and saves bandwidth on mobile.
 */
export function useInViewVideo({ threshold = 0.35, rootMargin = "0px" } = {}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const playPromise = el.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              /* autoplay can be blocked before user interaction; ignore */
            });
          }
        } else {
          el.pause();
        }
      },
      { threshold, rootMargin }
    );

    if (!prefersReducedMotion) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return videoRef;
}
