import { motion } from "framer-motion";
import VideoTile from "../components/VideoTile";
import AestheticClinicBrochure from "../components/AestheticClinicBrochure";

const stats = [
  ["Based", "Manila, Philippines"],
  ["Available", "Worldwide"],
  ["Focus", "Editorial · Runway · Campaign"],
  ["Represented by", "Available on enquiry"],
];

const opportunities = [
  {
    title: "Content Creation",
    description:
      "Luxury beauty, fashion, wellness & lifestyle content for TikTok, Instagram, and digital campaigns.",
  },
  {
    title: "Photography",
    description: "Products only · Products applied on me / wearing products",
  },
  {
    title: "Campaign Modeling",
    description:
      "Beauty campaigns · Makeup collections · Skincare launches · Commercial · Editorial · E-commerce",
  },
  {
    title: "Brand Partnerships",
    description:
      "Sponsored campaigns · Brand ambassadorships · PR collaborations · Event appearances",
  },
];

const brands = [
  ["Vice Cosmetics", "vice.jpeg"],
  ["SKINTIFIC", "skintific.png"],
  ["SACE LADY", "sacelady.jpeg"],
  ["Cream Silk", "creamsilk.jpeg"],
  ["Dove", "dove.png"],
  ["Glad2Glow", "glad2glow.jpeg"],
  ["MAC Styler", "macstyler.png"],
  ["Fairy Skin", "fairyskin.jpg"],
  ["Skinavor", "skinavor.png"],
  ["BYFINA", "byfina.jpeg"],
  ["moody", "moody lenses.png"],
  ["OLENS", "olens.png"],
  ["Anua", "anua.png"],
  ["Vita Bears", "vita bear.png"],
  ["JOOCYEE", "joocyee.jpeg"],
  ["MEDITHERAPY", "meditherapy.jpeg"],
  ["CoFANCY", "cofancy.jpeg"],
  ["LOA", "loa.png"],
  ["Mislens", "mislens.png"],
  ["SEA Makeup", "sea makeup.jpeg"],
  ["O.TWO.O", "otwoo.jpeg"],
  ["TTDEYE", "ttdyee.jpeg"],
  ["Beauty Couture", "beauty couture.jpeg"],
  ["Ghetto Dreams", "ghetto dreams.jpeg"],
];

function BrandTile({ name, file }) {
  return (
    <figure className="w-[38vw] min-w-[132px] max-w-[170px] shrink-0 snap-start md:w-full md:min-w-0 md:max-w-none">
      <div className="flex aspect-square w-full items-center justify-center rounded-full border border-sand bg-bone p-1.5 shadow-[0_14px_35px_-28px_rgba(28,24,21,0.65)]">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white">
          <img
            src={`media/brands/${file}`}
            alt={`${name} logo`}
            loading="eager"
            decoding="async"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
      <figcaption className="label mt-3 min-h-7 text-center text-[9px] leading-relaxed text-ink-70 md:text-[10px]">
        {name}
      </figcaption>
    </figure>
  );
}

export default function About() {
  return (
    <div>
      <section className="mx-auto max-w-[1600px] px-6 pb-3 pt-20 md:px-[8vw] md:pb-4 md:pt-28">
        <p className="label text-[13px]">The Face</p>
      </section>

      <section className="grid gap-0 md:grid-cols-2">
        <div className="order-2 flex items-center justify-center bg-linen px-6 py-8 md:order-1 md:min-h-[100svh] md:py-12">
          <div className="w-full max-w-[min(100%,56.25svh)]">
            <VideoTile src="media/reel-2.mp4" poster="media/posters/reel-2.jpg" />
          </div>
        </div>

        <div className="order-1 flex flex-col justify-center px-6 py-10 md:order-2 md:px-[6vw] md:py-24">
          <div>
            <p className="label mb-6 text-[12px]">Partnership Opportunities</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:gap-x-10 md:gap-y-9">
              {opportunities.map(({ title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <h2 className="font-display text-xl leading-tight md:text-2xl">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-70 md:text-[15px]">
                    {description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-sand pt-8 md:mt-14 md:gap-y-9 md:pt-10">
            {stats.map(([label, value], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <dt className="label mb-1.5 text-[12px]">{label}</dt>
                <dd className="text-base leading-snug md:text-lg">{value}</dd>
              </motion.div>
            ))}
          </dl>

          <motion.a
            href="#enquiries"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="label mt-8 inline-flex w-fit border-b border-espresso pb-1.5 text-[12px] text-espresso transition-opacity hover:opacity-60 md:mt-12"
          >
            Work With Iyah
          </motion.a>
        </div>
      </section>

      <section className="border-t border-sand px-6 py-12 md:px-[8vw] md:py-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-7 flex items-end justify-between gap-6 md:mb-10">
            <p className="label text-[12px]">Selected Brand Collaborations</p>
            <p className="label text-[10px] md:hidden">Swipe</p>
          </div>

          <div className="gallery-scroll -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 md:mx-0 md:grid md:grid-cols-6 md:gap-x-6 md:gap-y-8 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-8">
            {brands.map(([name, file]) => (
              <BrandTile key={name} name={name} file={file} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sand px-6 py-14 md:px-[8vw] md:py-28">
        <p className="label mb-7 md:mb-10">Aesthetic Clinic</p>
        <AestheticClinicBrochure />
      </section>
    </div>
  );
}
