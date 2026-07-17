import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "arrival", label: "Arrival" },
  { id: "face", label: "The Face" },
  { id: "portfolio", label: "Portfolio" },
  { id: "runway", label: "Runway" },
  { id: "enquiries", label: "Enquiries" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navigateTo = (id) => {
    setOpen(false);
    window.history.replaceState(null, "", `#${id}`);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-500 ${
        scrolled || open ? "bg-bone" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-[8vw]">
        <button
          onClick={() => navigateTo("arrival")}
          className="font-display text-lg italic md:text-xl"
        >
          Iyah Manalo
        </button>

        <nav className="hidden gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => navigateTo(link.id)}
              className="label border-b border-transparent pb-1 transition-colors hover:border-espresso hover:text-espresso"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="label md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-espresso/35 md:hidden"
              aria-label="Close menu"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-[82vw] max-w-sm flex-col bg-bone px-7 py-6 shadow-2xl md:hidden"
              style={{ backgroundColor: "#FAF7F2", opacity: 1 }}
            >
              <div className="flex items-center justify-between border-b border-sand pb-5">
                <p className="font-display text-xl italic">Iyah Manalo</p>
                <button
                  onClick={() => setOpen(false)}
                  className="label"
                  aria-label="Close menu"
                >
                  Close
                </button>
              </div>

              <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
                {links.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.05 }}
                    onClick={() => navigateTo(link.id)}
                    className="border-b border-sand py-5 text-left font-display text-3xl italic"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <p className="label mt-auto text-ink-70">
                Beauty • Fashion • Lifestyle
              </p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
