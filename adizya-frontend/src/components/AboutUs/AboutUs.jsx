"use client";
import React, { useEffect, useRef } from "react";
import localFont from "next/font/local";
import "./style.css";
import gsap from "gsap/src";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const headerFont = localFont({
  src: "../../../public/fonts/SILVER_CROWN.ttf",
  display: "swap",
});

const AboutUs = () => {
  const sectionRef = useRef(null);
  const pplRef = useRef(null);
  const textRef = useRef(null);
  const blueRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    const section = sectionRef.current;
    const ppl = pplRef.current;
    const text = textRef.current;
    const blue = blueRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        pin: true,
        markers: true,
        trigger: section,
        start: "top top",
        end: "bottom 20%",
        scrub: true,
      },
    });

    tl.fromTo(
      [ppl, blue],
      { y: 100, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
    );

    tl.fromTo(
      text,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.4"
    );

    return () => {
      tl.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div
      className="relative w-full min-h-[120vh] bg-paper overflow-hidden"
      ref={sectionRef}
    >
      <h1
        ref={textRef}
        className={`${headerFont.className} text-center text-[80px] md:text-[150px] lg:text-[243px] tracking-widest pt-24 leading-none`}
      >
        About Us
      </h1>
      <img
        ref={blueRef}
        src="/imgs/blue-outline.png"
        alt="People illustration"
        className="absolute bottom-[-70px] left-0 w-full h-auto"
      />
      <img
        ref={pplRef}
        src="/imgs/ppl.png"
        alt="People illustration"
        className="absolute bottom-0 scale-100 left-0 w-full h-auto"
      />
    </div>
  );
};

export default AboutUs;
