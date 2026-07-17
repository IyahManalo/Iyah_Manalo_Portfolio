export default function Footer() {
  return (
    <footer className="border-t border-sand bg-bone px-6 py-10 md:px-[8vw]">
      <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="font-display italic text-lg">Iyah Manalo</p>

        <div className="flex gap-6">
          <a href="https://www.instagram.com/iyahmnl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="label hover:text-espresso" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.tiktok.com/@iyahhhmanalo?is_from_webapp=1&sender_device=pc" className="label hover:text-espresso" target="_blank" rel="noreferrer">
            TikTok
          </a>
          <a href="mailto:workwithiahh@gmail.com" className="label hover:text-espresso">
            Email
          </a>
        </div>

        <p className="label text-ink-70">© {new Date().getFullYear()} Iyah Manalo</p>
      </div>
    </footer>
  );
}
