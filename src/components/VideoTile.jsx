import { motion } from "framer-motion";
import { useInViewVideo } from "../lib/useInViewVideo";

/**
 * A single self-playing tile used in grid layouts (Runway "Behind the
 * Scenes", Portfolio "Selected Works"). Plays while in view, pauses
 * otherwise — same independent-playback rule as ReelHero, just smaller.
 */
export default function VideoTile({ src, poster, label, index = 0 }) {
  const videoRef = useInViewVideo({ threshold: 0.15, rootMargin: "80px 0px" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative aspect-[9/16] w-full overflow-hidden bg-linen"
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload={poster ? "none" : "metadata"}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {label && (
        <p className="label absolute bottom-4 left-4 text-bone opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
          {label}
        </p>
      )}
    </motion.div>
  );
}
