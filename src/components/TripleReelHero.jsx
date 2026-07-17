import { motion } from "framer-motion";
import { useInViewVideo } from "../lib/useInViewVideo";

function PortraitReel({ src, poster, position = "center", type = "video", featured = false }) {
  const videoRef = useInViewVideo({ threshold: 0.25 });

  return (
    <div
      className={`relative aspect-[9/16] min-w-0 overflow-hidden bg-espresso transition-[filter] duration-700 ${
        featured ? "z-[1]" : "brightness-75"
      }`}
    >
      {type === "image" ? (
        <img
          className="absolute -left-px top-0 h-full w-[calc(100%+2px)] object-cover md:left-0 md:w-full"
          style={{ objectPosition: position }}
          src={src}
          alt=""
          aria-hidden="true"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute -left-px top-0 h-full w-[calc(100%+2px)] object-cover md:left-0 md:w-full"
          style={{ objectPosition: position }}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

/** Three portrait reels presented as one simultaneous-play hero. */
export default function TripleReelHero({ reels, eyebrow, caption, contentOffsetY = 0 }) {
  return (
    <section className="relative flex min-h-[58svh] items-center overflow-hidden bg-espresso md:min-h-[100svh]">
      <div className="absolute inset-0 grid grid-cols-3 gap-0 bg-espresso md:gap-1">
        {reels.map((reel, index) => (
          <PortraitReel key={reel.src} featured={index === 1} {...reel} />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/5 to-espresso/10" />

      <div
        className="relative z-10 mx-auto flex min-h-[58svh] w-full max-w-[1600px] flex-col justify-end px-6 pb-9 md:min-h-[100svh] md:px-[8vw] md:pb-20"
        style={{ transform: `translateY(${contentOffsetY}px)` }}
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
            className="max-w-measure font-display text-2xl italic text-bone md:text-4xl"
          >
            {caption}
          </motion.p>
        )}
      </div>
    </section>
  );
}
