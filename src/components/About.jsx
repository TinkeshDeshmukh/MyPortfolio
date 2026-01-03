import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const verticalRef = useRef(null);
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const paraRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(verticalRef.current, {
        opacity: 0,
        x: -40,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.to(lineRef.current, {
        height:410,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(paraRefs.current, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

        ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false, 
      });
    
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen mt-5 bg-[#0f0f0f] text-white z-20"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-32 sm:py-40 relative">

        {/* VERTICAL LABEL — DESKTOP ONLY */}
        <h2
          ref={verticalRef}
          className="
            hidden lg:block
            absolute
            -left-28
            top-[48%]
            -translate-y-1/2
            -rotate-90
            text-white/20
            text-7xl
            tracking-[0.6em]
            font-semibold
            pointer-events-none
            select-none
          "
        >
          ABOUT
        </h2>

        <div className="relative  max-w-2xl ml-0 lg:ml-auto">

          <p className="lg:hidden text-sm tracking-[0.3em] text-white/40 mb-6">
            ABOUT
          </p>

          <h2 className="text-xl
              sm:text-xl
              lg:text-2xl
              font-semibold
              text-white/60
              leading-tight">I think beyond features,I think in systems.</h2>
          <p
            ref={headingRef}
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-extrabold
              leading-tight
            "
          >
            Designing & engineering
            <br />
            modern web products
            <br />
            with purpose.
          </p>

          <div
            ref={lineRef}
            className=" absolute -left-71 -top-5 mt-6 w-0.5  bg-white/35"
          />

          <p
            ref={(el) => (paraRefs.current[0] = el)}
            className="
              mt-8
              text-white/80
              text-base
              sm:text-lg
              lg:text-xl
              leading-relaxed
            "
          >
            I’m a MERN Stack Developer focused on building scalable,
            high-performance web applications with clean architecture,
            thoughtful user experience, and long-term maintainability.
          </p>

          <p
            ref={(el) => (paraRefs.current[1] = el)}
            className="
              mt-5
              text-white/65
              text-base
              sm:text-lg
              leading-relaxed
            "
          >
            I care about how products feel, how code reads, and how
            systems scale — not just how fast something gets built.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
