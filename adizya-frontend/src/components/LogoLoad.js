"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import localFont from "next/font/local";

const silverCrown = localFont({
  src: "../../public/fonts/SILVER CROWN.ttf",
});
const hornset = localFont({
  src: "../../public/fonts/Hornset.ttf",
});
const pearlJean = localFont({
  src: "../../public/fonts/PearlJean.ttf",
});

export default function LogoLoad() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const textContainerRef = useRef(null);
  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const locationRef = useRef(null);

  useGSAP(
    () => {
      // Disable scrolling initially
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      const tl = gsap.timeline({
        onComplete: () => {
          // Enable scrolling after animation
          document.body.style.overflow = "auto";
          document.documentElement.style.overflow = "auto";

          // Trigger navbar slide-in animation
          const navbar = document.querySelector("nav");
          if (navbar) {
            gsap.to(navbar, {
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            });
          }
        },
      });

      // Set initial states
      gsap.set(textContainerRef.current, { opacity: 0 });
      gsap.set([titleRef.current, dateRef.current, locationRef.current], {
        opacity: 0,
        y: 30,
      });

      // Animation sequence
      // Wait for video to play
      tl.to({}, { duration: 5 })
        .to(videoRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(
          textContainerRef.current,
          {
            opacity: 1,
            duration: 0.5,
          },
          "-=0.3"
        )
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .to(
          dateRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          locationRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to({}, { duration: 0.1 }); // Pause for 0.1 second before enabling scroll
    },
    { scope: containerRef }
  );

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleVideoEnd = () => {
        gsap.to(video, {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        });
      };

      video.addEventListener("ended", handleVideoEnd);

      return () => {
        video.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  return (
    <main className="h-screen relative" ref={containerRef}>
      <section className="relative h-full w-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-10
                     object-center
                     md:object-center"
          style={{
            objectPosition: "47% 50%",
            transform: "scale(0.9)",
          }}
          autoPlay
          muted
          playsInline
        >
          <source src="/output.webm" type="video/webm" />
        </video>

        <div
          ref={textContainerRef}
          className="w-full flex flex-col justify-center items-center gap-y-8 absolute inset-0 z-20"
          style={{
            backgroundImage: "url('/imgs/herobg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <a
            href="https://www.instagram.com/adizya25/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1
              ref={titleRef}
              className={
                "md:text-[12rem] text-9xl text-(--color-headers) transition-transform duration-300 ease-out hover:-translate-y-2 cursor-pointer " +
                silverCrown.className
              }
            >
              Adizya 25
            </h1>
          </a>

          <h4
            ref={dateRef}
            className={
              "md:text-[2.5em] text-2xl text-(--color-headers) transition-transform duration-300 ease-out hover:-translate-y-2 cursor-pointer " +
              pearlJean.className
            }
          >
            24TH, 25TH, 26TH OCTOBER
          </h4>

          <a
            href="https://nitc.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3
              ref={locationRef}
              className={
                "text-[#363636] text-6xl tracking-wider md:text-[4rem] transition-transform duration-300 ease-out hover:-translate-y-2 cursor-pointer " +
                hornset.className
              }
            >
              NIT CALICUT
            </h3>
          </a>
        </div>
      </section>
    </main>
  );
}
