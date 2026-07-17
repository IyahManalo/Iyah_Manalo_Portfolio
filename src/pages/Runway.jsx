import TripleReelHero from "../components/TripleReelHero";
import VideoTile from "../components/VideoTile";

const beautyReel = [
  { src: "media/beauty-1.mp4", poster: "media/posters/beauty-1.jpg", label: "Beauty 01" },
  { src: "media/beauty-2.mp4", poster: "media/posters/beauty-2.jpg", label: "Beauty 02" },
  { src: "media/beauty-3.mp4", poster: "media/posters/beauty-3.jpg", label: "Beauty 03" },
  { src: "media/beauty-4.mp4", poster: "media/posters/beauty-4.jpg", label: "Beauty 04" },
  { src: "media/beauty-5.mp4", poster: "media/posters/beauty-5.jpg", label: "Beauty 05" },
];

export default function Runway() {
  return (
    <div>
      <TripleReelHero
        reels={[
          { src: "media/beauty-4.mp4", poster: "media/posters/beauty-4.jpg" },
          { src: "media/reel-4.mp4", poster: "media/posters/reel-4.jpg" },
          { src: "media/beauty-5.mp4", poster: "media/posters/beauty-5.jpg" },
        ]}
        eyebrow="On the Runway"
      />

      <section className="mx-auto max-w-[1600px] px-6 py-10 md:px-[8vw] md:py-20">
        <p className="label mb-5 text-[13px] md:mb-7">Beauty Editorial</p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
          {beautyReel.map((b, i) => (
            <VideoTile key={b.src} src={b.src} poster={b.poster} label={b.label} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
