import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = ["Home", "About", "Projects", "Why Me"];

const Navbar = () => {
  const mobileNavRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const [open, setOpen] = useState(false);

  /* MOBILE NAV FADE-IN */
  useEffect(() => {
    gsap.fromTo(
      mobileNavRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  }, []);

  /* MOBILE MENU ANIMATION */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      gsap.to(line1.current, { y: 8, rotate: 45, duration: 0.3 });
      gsap.to(line2.current, { opacity: 0, duration: 0.2 });
      gsap.to(line3.current, { y: -8, rotate: -45, duration: 0.3 });

      gsap.fromTo(
        menuRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.45, ease: "power3.out" }
      );

      gsap.fromTo(
        linksRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          delay: 0.15,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    } else {
      document.body.style.overflow = "smooth";

      gsap.to([line1.current, line3.current], {
        y: 0,
        rotate: 0,
        duration: 0.3,
      });
      gsap.to(line2.current, { opacity: 1, duration: 0.2 });

      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.35,
        ease: "power3.in",
      });
    }
  }, [open]);

  return (
    <>
      {/* ================= MOBILE NAV ================= */}
      <header
        ref={mobileNavRef}
        className="
          md:hidden
          fixed top-0 left-0 right-0 z-50
          h-14 px-6
          flex items-center justify-between
          bg-[#1b1b1b]  backdrop-blur-md
        "
      >
        <span className="text-xs tracking-[0.3em] text-white/70">
          TINKESH
        </span>

        <button
          onClick={() => setOpen(!open)}
          className="relative w-8 h-8"
        >
          <span ref={line1} className="absolute w-6 h-[2px] bg-white rounded" />
          <span ref={line2} className="absolute w-6 h-[2px] bg-white rounded" />
          <span ref={line3} className="absolute w-6 h-[2px] bg-white rounded" />
        </button>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        ref={menuRef}
        className="
          md:hidden
          fixed top-0 left-0 right-0 z-40
          h-screen w-full
          bg-[#121212] text-white
          flex items-center justify-center
          -translate-y-full opacity-0
        "
      >
        <nav className="flex flex-col items-center gap-8 text-xl font-medium">
          {navLinks.map((item, i) => (
            <a
              key={item}
              ref={(el) => (linksRef.current[i] = el)}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              onClick={() => setOpen(false)}
              className="hover:opacity-70 transition-opacity"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <header
        className="
          hidden md:block
          fixed top-0 left-0 right-0 z-50
          bg-transparent
        "
      >
        <nav className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">
          <span className="text-xs tracking-[0.3em] text-white/70">
            TINKESH
          </span>

          <ul className="flex gap-10 text-sm tracking-wide text-white/60">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="
                    relative
                    transition-colors duration-300
                    hover:text-white
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[1px]
                    after:w-0
                    after:bg-white
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
