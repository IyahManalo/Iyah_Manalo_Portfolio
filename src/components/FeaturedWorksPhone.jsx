import { motion } from "framer-motion";
import { useInViewVideo } from "../lib/useInViewVideo";

const works = Array.from({ length: 5 }, (_, index) => ({
  src: `media/beauty-${index + 1}.mp4`,
  poster: `media/posters/beauty-${index + 1}.jpg`,
  label: `0${index + 1}`,
}));

function PhoneVideo({ src, poster, label, featured = false }) {
  const videoRef = useInViewVideo({ threshold: 0.35 });

  return (
    <div className={`group relative min-h-0 overflow-hidden bg-espresso ${featured ? "col-span-2" : ""}`}>
      <video ref={videoRef} src={src} poster={poster}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        muted loop playsInline preload="metadata" aria-hidden="true" />
      <span className="label absolute bottom-3 left-3 text-bone/80">{label}</span>
    </div>
  );
}

export default function FeaturedWorksPhone() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-[9/16] w-full max-w-[390px] rounded-[3rem] border-[7px] border-espresso bg-espresso p-1.5 shadow-[0_35px_80px_-30px_rgba(28,24,21,0.55)] md:border-[9px]"
    >
      <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-espresso md:top-2.5 md:h-6 md:w-28" />
      <div className="grid h-full grid-cols-2 grid-rows-3 gap-px overflow-hidden rounded-[2.25rem] bg-bone/20">
        {works.map((work, index) => (
          <PhoneVideo key={work.src} {...work} featured={index === 2} />
        ))}
      </div>
    </motion.div>
  );
}
