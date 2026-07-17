import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInViewVideo } from "../lib/useInViewVideo";

gsap.registerPlugin(ScrollTrigger);

/**
 * Full-bleed (or split) portrait video hero. Each instance is entirely
 * self-contained: its own play state, its own ScrollTrigger, its own
 * parallax tween. Rendering five of these on five different pages is
 * how "no carousel" is achieved — there is no shared index to manage.
 */
export default function ReelHero({
  src,
  poster,
  eyebrow,
  caption,
  variant = "full", // "full" | "split"
  dim = false, // dims the video for legibility (used on Contact page)
  align = "end", // vertical alignment of the caption block: "end" | "center"
}) {
  const wrapRef = useRef(null);
  const videoRef = useInViewVideo({ threshold: 0.3 });

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        video,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, [videoRef]);

  const containerClasses =
    variant === "full"
      ? "relative h-[100svh] w-full overflow-hidden"
      : "relative h-[70svh] md:h-[100svh] w-full overflow-hidden";

  return (
    <div ref={wrapRef} className={containerClasses}>
      <video
        ref={videoRef}
        className="absolute inset-0 h-[112%] w-full object-cover -top-[6%]"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      />
      {dim && <div className="absolute inset-0 bg-espresso/45" />}
      <div
        className={
          "absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-transparent"
        }
      />

      <div
        className={
          "relative z-10 h-full mx-auto flex max-w-[1600px] flex-col px-6 md:px-[8vw] " +
          (align === "center" ? "justify-center" : "justify-end pb-14 md:pb-20")
        }
      >
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="label mb-4 text-bone/90"
          >
            {eyebrow}
          </motion.p>
        )}
        {caption && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display italic text-2xl md:text-4xl text-bone max-w-measure"
          >
            {caption}
          </motion.p>
        )}
      </div>
    </div>
  );
}
