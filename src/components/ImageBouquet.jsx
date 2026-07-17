import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * The one signature moment of the site: a hand-placed, overlapping cluster
 * of tear-sheet-style editorial images
 * that assembles itself as the user scrolls in. This is intentionally the
 * only "bold" animation on the page — everything else stays quiet.
 */
const layout = [
  { top: "2%", left: "2%", w: "31%", rot: -6, z: 3 },
  { top: "13%", left: "25%", w: "28%", rot: 4, z: 6 },
  { top: "0%", left: "51%", w: "27%", rot: -3, z: 4 },
  { top: "10%", left: "73%", w: "25%", rot: 7, z: 2 },
  { top: "48%", left: "5%", w: "27%", rot: 5, z: 5 },
  { top: "43%", left: "28%", w: "30%", rot: -5, z: 8 },
  { top: "50%", left: "55%", w: "27%", rot: 4, z: 7 },
  { top: "45%", left: "76%", w: "23%", rot: -7, z: 1 },
];

export default function ImageBouquet({ images }) {
  const rootRef = useRef(null);
  const itemRefs = useRef([]);
  itemRefs.current = [];

  const addRef = (el) => {
    if (el) itemRefs.current.push(el);
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(itemRefs.current, { opacity: 1, x: 0, y: 0, rotate: (i, t) => t.dataset.rot });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          once: true,
        },
      });

      itemRefs.current.forEach((el, i) => {
        const fromX = (i % 2 === 0 ? -1 : 1) * (120 + i * 14);
        const fromY = 90 + i * 10;
        const rot = parseFloat(el.dataset.rot);

        tl.fromTo(
          el,
          { opacity: 0, x: fromX, y: fromY, rotate: rot * 2.2, scale: 0.92 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: rot,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          i * 0.1
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto h-[130vw] max-h-[900px] w-full max-w-[900px] md:h-[640px]"
    >
      {images.map((item, i) => {
        const pos = layout[i % layout.length];
        return (
          <motion.div
            key={i}
            ref={addRef}
            data-rot={pos.rot}
            whileHover={{ scale: 1.04, zIndex: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              width: pos.w,
              zIndex: pos.z,
              transform: `rotate(${pos.rot}deg)`,
            }}
            className="aspect-[3/4] overflow-hidden shadow-[0_18px_40px_-14px_rgba(28,24,21,0.35)] ring-1 ring-black/5"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
