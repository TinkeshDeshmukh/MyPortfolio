import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Job Trend Analyzer",
    desc: "Job Market Trend Analyzer",
    stack: "MERN • SerpApi",
    link:"#",
    featured: true,
  },
  {
    id: "02",
    title: "Health IQ.ai",
    desc: "AI-driven personal health assistant",
    link:"#",
    stack: "MERN • Gemini API",
  },
  {
    id: "03",
    title: "Food Recipe Platform",
    desc: "Clean UI-first food discovery experience",
    link:"https://food-site-ten-chi.vercel.app/",
    stack: "React • Tailwind • UX",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const rowRefs = useRef([]);
  const ghostRefs = useRef([]);
  const lineRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 120,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(rowRefs.current, {
        y: 40,
        opacity: 0,
        stagger: 0.25,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      lineRefs.current.forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
            },
          }
        );
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onEnter = (i) => {
    gsap.to(ghostRefs.current[i], {
      opacity: 0.05,
      duration: 0.35,
      ease: "power2.out",
    });

    gsap.to(rowRefs.current[i], {
      x: 16,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const onLeave = (i) => {
    gsap.to(ghostRefs.current[i], {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(rowRefs.current[i], {
      x: 0,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen bg-[#0a0a0a] text-white z-30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-32">

        <div className="mb-28">
          <p className="text-sm tracking-[0.4em] text-white/40 mb-4">
            PROJECTS
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Selected Work
          </h2>
        </div>

        <div className="flex flex-col gap-24 relative">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="relative"
              onMouseEnter={() => onEnter(i)}
              onMouseLeave={() => onLeave(i)}
            >
              <h3
                ref={(el) => (ghostRefs.current[i] = el)}
                className="
                  hidden lg:block
                  pointer-events-none
                  select-none
                  absolute
                  top-1/2
                  -translate-y-1/2
                  left-0
                  text-[clamp(4rem,8vw,7rem)]
                  font-extrabold
                  tracking-tight
                  text-white
                  opacity-0
                  whitespace-nowrap
                "
              >
                {p.title}
              </h3>

              <div
                ref={(el) => (rowRefs.current[i] = el)}
                className="relative z-10"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between gap-8 pb-10">
                  <div>
                    <p
                      className={`text-sm mb-2 ${
                        p.featured
                          ? "text-white/60"
                          : "text-white/40"
                      }`}
                    >
                      {p.id}
                    </p>

                        {p.featured?<span className="text-white/40">★ FEATURED PROJECT </span>:""}
                    <h4
                      className={`text-3xl sm:text-4xl font-bold mb-3 `}
                    >
                      {p.title}
                    </h4>
                  

                    <p className="text-white/70 text-lg mb-2">
                      {p.desc}
                    </p>

                    <p className="text-white/40 text-sm">
                      {p.stack}
                    </p>
                  </div>

                  <div className="self-start pt-6 sm:pt-10">
                    <a
                    target="_blank"
                      href={p.link}
                      className="
                        relative
                        text-sm
                        tracking-wide
                        text-white/70
                        transition
                        hover:text-white
                      "
                    >
                      See how it works →
                      <span
                        className="
                          absolute
                          left-0
                          -bottom-1
                          h-[1px]
                          w-0
                          bg-white
                          transition-all
                          duration-300
                          hover:w-full
                        "
                      />
                    </a>
                  </div>
                </div>

                <span
                  ref={(el) => (lineRefs.current[i] = el)}
                  className="block h-[1px] w-full bg-white/20 origin-left"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
