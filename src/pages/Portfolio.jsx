import { motion } from "framer-motion";
import VideoTile from "../components/VideoTile";

const galleryImages = [
  { src: "media/gallery-9.jpg", alt: "Iyah Manalo editorial 09" },
  { src: "media/gallery-10.jpg", alt: "Iyah Manalo editorial 10" },
  { src: "media/gallery-11.jpg", alt: "Iyah Manalo editorial 11" },
  { src: "media/gallery-12.JPG", alt: "Iyah Manalo editorial 12" },
  { src: "media/gallery-13.jpg", alt: "Iyah Manalo editorial 13" },
  { src: "media/gallery-14.jpg", alt: "Iyah Manalo editorial 14" },
  { src: "media/gallery-15.png", alt: "Iyah Manalo editorial 15" },
  { src: "media/gallery-16.jpg", alt: "Iyah Manalo editorial 16" },
  { src: "media/gallery-17.PNG", alt: "Iyah Manalo editorial 17" },
  { src: "media/gallery-18.jpeg", alt: "Iyah Manalo editorial 18" },
  { src: "media/gallery-19.PNG", alt: "Iyah Manalo editorial 19" },
  { src: "media/gallery-20.JPG", alt: "Iyah Manalo editorial 20" },
  { src: "media/gallery-21.png", alt: "Iyah Manalo editorial 21" },
  { src: "media/gallery-22.PNG", alt: "Iyah Manalo editorial 22" },
  { src: "media/gallery-23.png", alt: "Iyah Manalo editorial 23" },
];

const featuredWorks = [
  { src: "media/Featured-Works-1.mp4", poster: "media/posters/Featured-Works-1.jpg", label: "Campaign 01" },
  { src: "media/Featured-Works-2.mp4", poster: "media/posters/Featured-Works-2.jpg", label: "Campaign 02" },
  { src: "media/Featured-Works-3.mp4", poster: "media/posters/Featured-Works-3.jpg", label: "Campaign 03" },
  { src: "media/Featured-Works-4.mp4", poster: "media/posters/Featured-Works-4.jpg", label: "Campaign 04" },
  { src: "media/Featured-Works-5.mp4", label: "Campaign 05" },
  { src: "media/Featured-Works-6.mp4", label: "Campaign 06" },
];

export default function Portfolio() {
  return (
    <div>
      <section className="mx-auto max-w-[1600px] px-6 pb-0 pt-24 md:px-[8vw] md:pb-1 md:pt-32">
        <p className="label text-[13px]">Photo Gallery</p>
      </section>

      <section className="pb-5 pt-3 md:px-[8vw] md:pb-14 md:pt-4">
        <div className="gallery-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 md:grid md:grid-cols-5 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="w-[78vw] shrink-0 snap-center md:w-auto"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[3/4] h-full w-full bg-linen object-cover"
                loading={index < 2 ? "eager" : "lazy"}
              />
            </motion.figure>
          ))}
        </div>
        <p className="label mt-4 px-6 text-ink-70 md:hidden">
          Swipe to explore
        </p>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-14 md:px-[8vw] md:py-28">
        <div className="mb-8 flex items-end justify-between border-b border-sand pb-5 md:mb-12 md:pb-6">
          <p className="label">Featured Works</p>
          <p className="label text-ink-70 hidden md:block">06 Campaigns</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
          {featuredWorks.map((w, i) => (
            <VideoTile key={w.src} src={w.src} poster={w.poster} label={w.label} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="label mt-8 text-ink-70"
        >
          Hover to preview · full campaigns on request
        </motion.p>
      </section>
    </div>
  );
}
