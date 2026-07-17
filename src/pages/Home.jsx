import { motion } from "framer-motion";
import TripleReelHero from "../components/TripleReelHero";

export default function Home() {
  return (
    <div>
      <TripleReelHero
        reels={[
          { src: "media/reel-3.mp4", poster: "media/posters/reel-3.jpg" },
          { src: "media/reel-1.mp4", poster: "media/posters/reel-1.jpg" },
          { src: "media/beauty-1.mp4", poster: "media/posters/beauty-1.jpg" },
        ]}
        eyebrow="Model · Influencer · Manila"
      />

      <section className="mx-auto max-w-[1600px] px-6 py-14 md:px-[8vw] md:py-36">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl leading-none md:text-6xl">
              Iyah Manalo
            </h2>
            <p className="label mb-7 mt-4 max-w-sm leading-relaxed text-ink-70 md:mb-10">
              Soft Glam Beauty • Fashion &amp; Lifestyle Creator • Model
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              className="measure space-y-5 text-lg text-ink-70"
            >
              <p>
                I’m Iyah Manalo, a beauty, fashion, and lifestyle creator known
                for my soft glam aesthetic and clean, elevated visual style.
              </p>
              <p>
                I create clean, polished visuals that showcase beauty, skincare,
                fashion, and wellness through GRWMs, product features, event
                coverage, and brand collaborations. My goal is to present every
                brand with elegance, authenticity, and attention to detail while
                staying true to my signature aesthetic.
              </p>
              <p>
                In addition to content creation, I’m available for commercial
                modeling, beauty campaigns, makeup collection launches,
                editorial shoots, and long-term brand partnerships, creating
                content that is both visually elevated and impactful.
              </p>
            </motion.div>
            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              href="#portfolio"
              className="label mt-8 inline-block border-b border-espresso pb-1"
            >
              View the Portfolio
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
