import { motion } from "framer-motion";
import { useInViewVideo } from "../lib/useInViewVideo";

const campaigns = [
  { src: "media/Aesthetic-1.mp4", number: "01", title: "Aesthetic One" },
  { src: "media/Aesthetic-2.mp4", number: "02", title: "Aesthetic Two" },
];

function AestheticCard({ src, number, title, index }) {
  const videoRef = useInViewVideo({ threshold: 0.3 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.75,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-linen shadow-[0_24px_60px_-26px_rgba(28,24,21,0.5)] ring-1 ring-black/5">
        <video
          ref={videoRef}
          src={src}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent" />
      </div>

      <div className="mt-5 flex items-baseline justify-between border-t border-sand pt-4">
        <h3 className="font-display text-2xl">{title}</h3>
        <span className="label text-ink-70">{number}</span>
      </div>
    </motion.article>
  );
}

export default function AestheticClinicBrochure() {
  return (
    <div className="mx-auto grid w-full max-w-[820px] gap-12 sm:grid-cols-2 sm:gap-8 md:gap-12">
      {campaigns.map((campaign, index) => (
        <AestheticCard
          key={campaign.src}
          {...campaign}
          index={index}
        />
      ))}
    </div>
  );
}
