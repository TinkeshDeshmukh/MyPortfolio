import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../assets/hero.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const sideTextRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { letterSpacing: "0.3em", opacity: 0 },
        { letterSpacing: "0em", opacity: 1, duration: 1.2 }
      )
        .fromTo(
          imageRef.current,
          { y: 300, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.8"
        )
        .fromTo(
          sideTextRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 }
        )
        .fromTo(
          paraRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 }
        );

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
      id="home"
      className="relative h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-[#1b1a1a] text-white z-0"
    >
      <div className="px-10 pt-24 flex flex-col justify-center">
        <h1
          ref={titleRef}
          className="text-[21vw] text-center lg:text-start lg:text-[12vw] font-extrabold leading-none"
        >
          CODE
          <br />
          DESIGN
          <br />
          IMPACT
        </h1>

        <p
          ref={paraRef}
          className="mt-6 text-white/60 text-xl text-center lg:text-start px-3"
        >
          I turn ideas into scalable, maintainable web products.
        </p>
      </div>

      <div className="relative hidden lg:flex items-center justify-center">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Hero visual"
          className="w-[87%] opacity-90 absolute bottom-0"
        />

        <h2
          ref={sideTextRef}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 rotate-90
          text-[4rem] font-semibold text-gray-500 opacity-40 tracking-wide
          pointer-events-none select-none"
        >
          LET’S BUILD
        </h2>
      </div>
    </section>
  );
}
