import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Linkedin, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WhyMe = () => {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(labelRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .from(
          headingRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          contentRef.current.children,
          {
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          iconsRef.current.children,
          {
            y: 20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="whyme"
      className="relative z-40 min-h-screen bg-[#0e0d0d] text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full">

        {/* SECTION LABEL */}
        <div
          ref={labelRef}
          className="mb-12 text-xs tracking-[0.4em] text-white/40"
        >
          PHILOSOPHY
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — STATEMENT */}
          <h2
            ref={headingRef}
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-extrabold
              leading-tight
            "
          >
            Every decision
            <br />
            is intentional.
          </h2>

          {/* RIGHT — CONTENT */}
          <div className="space-y-10">

            <div
              ref={contentRef}
              className="space-y-6 text-white/70 text-lg leading-relaxed"
            >
              <p>
                I don’t randomly pick libraries, patterns, or architectures.
                Every choice is driven by scalability, clarity, and long-term
                maintainability.
              </p>

              <p>
                This mindset reflects in how I design interfaces,
                structure codebases, and ship features that continue to
                perform as products evolve.
              </p>
            </div>

            {/* CONNECT */}
            <div
              ref={iconsRef}
              className="flex items-center gap-6 pt-2"
            >
              <span className="text-sm text-white/40">
                Let’s connect
              </span>

              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:your@email.com"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
