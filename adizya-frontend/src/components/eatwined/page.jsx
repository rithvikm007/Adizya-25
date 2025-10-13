"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EatwinedPage = () => {
  const overlayRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Observe the specific section (card) and run animation only when
    // the card is mostly visible (threshold 0.9). This avoids firing while
    // other page sections scroll into view.
    if (!sectionRef.current || !overlayRef.current) return;

    const el = overlayRef.current;
    const observed = sectionRef.current;

    const onIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        // When the section is at least 90% visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
          gsap.fromTo(
            el,
            { opacity: 0 },
            { opacity: 0.85, duration: 1.6, ease: "power2.out" }
          );
          // Stop observing after the animation has been triggered once
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(onIntersect, {
      threshold: [0.5, 0.75, 0.9, 1.0],
    });
    observer.observe(observed);

    return () => {
      try {
        observer.disconnect();
      } catch (e) {}
      try {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch (e) {}
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-screen min-h-screen h-fit">
      {/* Background Image */}
      <Image
        src="/imgs/web_map.png"
        alt="Background"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-white/95 pointer-events-none flex items-center justify-center flex-col font-hellas-fun"
        style={{ opacity: 0 }}
      >
        <div className="text-base md:text-lg xl:text-3xl tracking-wider uppercase text-gray-700">
          ADIZYA'25 THEME
        </div>

        <h1 className="font-silver-crown text-8xl lg:text-[10rem] mb-7 text-gray-900 tracking-wide">
          EATWINED
        </h1>

        <div className="mt-6 text-base md:text-lg xl:text-3xl  text-gray-800/95 max-w-7xl mx-auto ">
          ENTWINED, which is this Adizya's theme, explores the uncharted
          connections existing among people that coalesces to weave the fabric
          of architecture and ultimately the tapestry of society.
          <br />
          <br />
          Mankind, held together by the common threads of cultural, social and
          geographical sensitivities, endeavours to shape the architectural
          vocabulary accounting for each and every identity that enriches the
          value and narrative. It simply reiterates its quality of teamwork and
          diversity, asserting how small contributions paint a bigger and better
          picture.
          <br />
          <br />
          Nuances of a society's ethos are often manifested physically, in forms
          of residential, institutional, industrial, religious and commercial
          buildings. The evolution of society and advent of technology parallels
          the advancements in the design field and capturing the essence of this
          concept in relation to humanitarian principles forms the crux of the
          theme.
        </div>
      </div>
    </section>
  );
};

export default EatwinedPage;
