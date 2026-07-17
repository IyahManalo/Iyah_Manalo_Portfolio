import { motion } from "framer-motion";
import { useInViewVideo } from "../lib/useInViewVideo";

const instagramUrl =
  "https://www.instagram.com/iyahmnl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D";
const tiktokUrl =
  "https://www.tiktok.com/@iyahhhmanalo?is_from_webapp=1&sender_device=pc";

const contactReels = [
  { src: "media/reel-2.mp4", poster: "media/posters/reel-2.jpg" },
  { src: "media/beauty-2.mp4", poster: "media/posters/beauty-2.jpg" },
  {
    src: "media/Featured-Works-1.mp4",
    poster: "media/posters/Featured-Works-1.jpg",
  },
];

function ContactReel({ src, poster }) {
  const videoRef = useInViewVideo({ threshold: 0.25 });

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className="aspect-[9/16] h-full w-full object-cover"
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}

function SocialIcon({ children }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso text-xs transition-colors group-hover:bg-espresso group-hover:text-bone">
      {children}
    </span>
  );
}

export default function Contact() {
  return (
    <section className="min-h-screen bg-bone px-6 pb-16 pt-24 md:px-[8vw] md:pb-32 md:pt-40">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="md:pl-[4vw]"
        >
          <p className="label mb-6">Enquiries</p>
          <h1 className="font-display text-5xl leading-none md:text-7xl lg:text-8xl">
            Let’s connect
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-70">
            For content creation, campaigns, modeling, events, and long-term
            brand partnerships.
          </p>

          <dl className="mt-12 space-y-6 border-t border-sand pt-8">
            <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:items-baseline">
              <dt className="label">Email</dt>
              <dd>
                <a
                  href="mailto:workwithiahh@gmail.com"
                  className="border-b border-transparent text-lg transition-colors hover:border-espresso"
                >
                  workwithiahh@gmail.com
                </a>
              </dd>
            </div>
            <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:items-baseline">
              <dt className="label">Instagram</dt>
              <dd>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-transparent text-lg transition-colors hover:border-espresso"
                >
                  @iyahmnl
                </a>
              </dd>
            </div>
            <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:items-baseline">
              <dt className="label">TikTok</dt>
              <dd>
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-transparent text-lg transition-colors hover:border-espresso"
                >
                  @iyahhhmanalo
                </a>
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[500px] rounded-[2.75rem] border-[8px] border-espresso bg-linen p-5 shadow-[0_35px_80px_-30px_rgba(28,24,21,0.45)] md:p-8"
        >
          <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-espresso" />

          <div className="rounded-[2rem] bg-bone px-5 pb-6 pt-12 text-center md:px-8 md:pb-8">
            <img
              src="media/gallery-1.jpg"
              alt="Iyah Manalo"
              className="mx-auto h-24 w-24 rounded-full border-4 border-bone object-cover shadow-lg md:h-28 md:w-28"
            />
            <h2 className="mt-5 font-display text-3xl md:text-4xl">Iyah Manalo</h2>
            <p className="label mt-2">Beauty • Fashion • Lifestyle</p>
            <p className="mt-4 text-sm text-ink-70">Tap below to connect</p>

            <div className="mt-6 flex justify-center gap-4">
              <a
                href="mailto:workwithiahh@gmail.com"
                aria-label="Email Iyah Manalo"
                className="group"
              >
                <SocialIcon>Mail</SocialIcon>
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Iyah Manalo on Instagram"
                className="group"
              >
                <SocialIcon>IG</SocialIcon>
              </a>
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Iyah Manalo on TikTok"
                className="group"
              >
                <SocialIcon>TT</SocialIcon>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 overflow-hidden rounded-xl bg-espresso/10">
              {contactReels.map((reel) => (
                <ContactReel key={reel.src} {...reel} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
