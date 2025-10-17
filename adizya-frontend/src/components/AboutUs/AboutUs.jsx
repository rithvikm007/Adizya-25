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

const hellasFun = localFont({
  src: "../../../public/fonts/hellasfun-plain.ttf",
  display: "swap",
});

const hornset = localFont({
  src: "../../../public/fonts/Hornset.ttf",
  display: "swap",
});

const pearlJean = localFont({
  src: "../../../public/fonts/PearlJean.ttf",
  display: "swap",
});

const AboutUs = () => {
  const sectionRef = useRef(null);
  const pplRef = useRef(null);
  const textRef = useRef(null);
  const blueRef = useRef(null);
  const infoRef = useRef(null);
  const deptRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const section = sectionRef.current;
    const ppl = pplRef.current;
    const text = textRef.current;
    const blue = blueRef.current;
    const info = infoRef.current;
    const dept = deptRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        pin: true,
        trigger: section,
        start: "top top",
        end: "+=300%",
        scrub: true,
      },
    });

    tl.fromTo(
      [ppl, blue],
      { y: 100, opacity: 0, scale: 0.6 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
    );

    tl.fromTo(
      text,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.4"
    )
      .to(text, { y: -80, opacity: 0, duration: 1, ease: "power3.out" })
      .to([blue, ppl], {
        y: 0,
        opacity: 0,
        scale: 0.6,
        duration: 1,
        ease: "back.out(1.7)",
      })
      .fromTo(
        info,
        {
          y: 80,
          opacity: 0,
          scale: 0.6,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "back.out(1.7)",
          duration: 1,
        }
      )
      .to(info, { duration: 1 })
      .to(info, { x: "-100%", opacity: 0, duration: 1, ease: "power2.inOut" })
      .fromTo(
        dept,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1, ease: "power2.inOut" },
        "<"
      );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="relative w-full min-h-[120vh] bg-paper overflow-hidden"
      ref={sectionRef}
    >
      <h1
        ref={textRef}
        className={`${headerFont.className} text-center text-[150px] md:text-[150px] lg:text-[243px] tracking-widest pt-24 leading-none`}
      >
        About Us
      </h1>

      <img
        ref={blueRef}
        src="/imgs/blue-outline.webp"
        alt="People illustration"
        className="absolute bottom-[-70px] left-0 w-full h-auto"
      />
      <img
        ref={pplRef}
        src="/imgs/ppl.webp"
        alt="People illustration"
        className="absolute bottom-[20vh] lg:bottom-0 left-0 w-full md:h-auto"
      />

      <div
        ref={infoRef}
        className="absolute inset-0 flex items-center justify-center opacity-0 px-4"
      >
        <div className="flex flex-col mt-[-20vh] lg:flex-row items-center justify-center w-[92%] bg-[#fdf5e6] shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-2xl border border-[#d4c7a4] p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden">
          <div
            className={`${hellasFun.className} w-full lg:w-1/2 text-[#363636] leading-relaxed text-sm sm:text-base md:text-lg lg:text-3xl tracking-wide`}
          >
            <p>
              Adizya is the annual architectural event hosted by the Department
              of Architecture and Planning at National Institute of Technology,
              Calicut.
            </p>
            <p className="mt-4">
              ADIZYA serves as a dynamic platform, where students,
              professionals, and enthusiasts converge to celebrate the
              multifaceted world of architecture. Each year, Adizya adopts a
              unique theme that reflects contemporary architectural discourse,
              inviting participants to explore the enduring changes that have
              moulded the architectural realm.
            </p>
          </div>

          <div className="block lg:hidden w-full h-[1px] bg-[#d4c7a4] my-6"></div>

          <div className="hidden lg:block self-stretch w-[2px] bg-[#d4c7a4] mx-8"></div>

          <div className={`w-full ${pearlJean.className} lg:w-1/2 flex flex-col items-center lg:items-center justify-center text-[#1e2a5a] mt-8 lg:mt-0 space-y-8 text-center lg:text-left`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              <p>HANDS-ON</p>
              <p className="lg:ml-[-50px]">WORKSHOPS</p>
            </h2>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              <p>INSIGHTFUL</p>
              <p className="lg:ml-[50px]">LECTURES</p>
            </h2>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              <p>INTERACTIVE</p>
              <p className="lg:ml-[-50px]">EXHIBITIONS</p>
            </h2>
          </div>
        </div>
      </div>
      <div
        ref={deptRef}
        className="absolute inset-0 flex items-center justify-center opacity-0 px-4"
      >
        <div className="w-[92%] mt-[-20vh] bg-[#fdf5e6] shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-2xl border border-[#d4c7a4] p-6 sm:p-8 md:p-10 lg:p-12 relative text-center lg:text-left">
          <h1
            className={`${hornset.className} text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1e2a5a] leading-tight`}
          >
            DEPARTMENT OF ARCHITECTURE AND PLANNING
          </h1>

          <p
            className={`${hellasFun.className} mt-6 sm:mt-10 text-[#363636] leading-relaxed text-sm sm:text-base md:text-lg lg:text-3xl tracking-wide`}
          >
            Here at National Institute of Technology, Calicut, celebrates design
            like no other. Having secured the third rank in NIRF, the department
            strives to inculcate an atmosphere of knowledge, excellence and
            application-based learning to encourage students to reach greater
            heights in the field of architecture and urban planning.
            <br />
            <br />
            Offering Bachelors in Architecture and Masters in Urban Planning, it
            provides a meaningful academic platform to exhibit interest and
            talent. The department also engages in PhD programmes across several
            disciplines, establishing a research and learning-oriented
            environment.
            <br />
            <br />
            The vision of the department promises to develop and dispense among
            the fraternity, professional expertise and proficient scholarship in
            architecture, planning and allied branches, rooted with social and
            environmental responsibility through an interdisciplinary approach
            and cutting-edge research.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
