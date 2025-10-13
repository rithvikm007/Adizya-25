"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const silverCrown = localFont({
  src: "../../../public/fonts/SILVER_CROWN.ttf",
  variable: "--font-silver-crown",
});

const hellasFun = localFont({
  src: "../../../public/fonts/HellasFunPlain.ttf",
  variable: "--font-hellas-fun",
});

const hornset = localFont({
  src: "../../../public/fonts/Hornset.ttf",
});

const keySpeaker = {
  architect: "AR. DEAN D'CRUZ",
  backgroundImage: "/imgs/dean.png",
  backgroundColor: "9A2806",
  description:
    "A graduate from J. J. college of architecture, Mumbai, set up practice in Goa in 1989, continuing to co-found Mozaic Design architectural wing in 2001. He has conducted numerous workshops and seminars on architecture, planning and environment, with works and articles published in leading magazines in India and abroad. Having designed over 250 houses, 50 hotels, 30 housing complexes, 30 institutions, offices and factories, Dean is recipient of multiple awards. His current efforts are aimed at improving academic standards across the country through awareness of criteria that address environmental and social issues in architecture and planning; all made possible through workshops, master classes and his presence as a jury member on a large number of award platforms.",
};

const content = [
  {
    architect: "Ar. Shyam Raj Chandroth ",
    backgroundImage: "/imgs/ShyamRaj.png",
    overlay: "A6360F",
    description:
      "Ar. Shyamraj Chandroth graduated from the Government Engineering College in Thrissur in 2011. He started his career at MR Associates as an associate architect. He established his own firm named Viewpoint Designs in 2013, based in Thrissur, and later established 7th Hue Architecture Studio as a sister concern in 2022. Starting with private residences, the firm now handles projects like group villas, apartments, commercial buildings, office buildings, shopping malls, multiplexes, educational institutions, and resorts all over Kerala.",
  },
  {
    architect: "Ar. Guru Prasanna",
    overlay: "D7570E",
    backgroundImage: "/imgs/SIR.png",
    description:
      "Guru Prasanna, after completing his architectural education at the NIT, Tiruchirappalli, and professional training from reputed firms like DAAT (Delhi), Venkatraman Associates (Bangalore), and Brand New Day (Auroville), started his practice under the name of Gargoyle Architecture and Interiors and worked on many residential, commercial and planning projects. After five years of field experience; in 2006 he adjourned to travel and pursue his education in Urban Design and Urban Development (MUDD) at the University of New South Wales, Sydney. Since his return in 2007, he has continued to work as the principal of his current firm BETWEENLINES.",
  },
  {
    architect: "Ar. Sridevi Changali",
    backgroundImage: "/imgs/Sridevi.png",
    overlay: "849E17",
    description:
      "Ar. Sridevi Changali, Co-founder of masonsinkarchitecture, an architect dedicated to sustainable design and heritage conservation. With her extensive experience in restoring city-level and building-level heritage projects, Sridevi brings a unique blend of ecological sensitivity and modern architectural wisdom to the forefront.",
  },
  {
    architect: "Mr. John Doe",
    overlay: "6777B5",
    backgroundImage: null,
    description:
      "An eminent Indian designer, scenographer and art curator, John Doe is the founder of the Asian Heritage Foundation and the Festival of India. He has designed several museums, cultural centres, hotels and public spaces in India and abroad. He was awarded the Padma Shri in 1986 and the Padma Bhushan in 2003 by the Government of India.",
  },
  {
    architect: "Mr. John Doe",
    overlay: "6777F6",
    backgroundImage: null,
    description:
      "An eminent Indian designer, scenographer and art curator, John Doe is the founder of the Asian Heritage Foundation and the Festival of India. He has designed several museums, cultural centres, hotels and public spaces in India and abroad. He was awarded the Padma Shri in 1986 and the Padma Bhushan in 2003 by the Government of India.",
  },
  {
    architect: "Mr. John Doe",
    overlay: "6777F6",
    backgroundImage: null,
    description:
      "An eminent Indian designer, scenographer and art curator, John Doe is the founder of the Asian Heritage Foundation and the Festival of India. He has designed several museums, cultural centres, hotels and public spaces in India and abroad. He was awarded the Padma Shri in 1986 and the Padma Bhushan in 2003 by the Government of India.",
  },
];

const Lectures = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full min-h-screen p-10 bg-[url('/imgs/background.png')] bg-cover bg-center bg-no-repeat text-white bg-[#F9EAC6]">
      <h1
        className={`${silverCrown.className} text-7xl text-black tracking-wider mb-6 ml-10`}
      >
        KEY SPEAKER
      </h1>

      <div className="m-10 h-[70vh] flex overflow-hidden relative mb-20">
        <div className="h-full flex-1 overflow-hidden relative">
          <div className="absolute inset-0">
            {keySpeaker.backgroundImage ? (
              <Image
                src={keySpeaker.backgroundImage}
                alt="Profile"
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full" />
            )}
          </div>

          <div
            className="absolute inset-0"
            style={{ backgroundColor: `#${keySpeaker.backgroundColor}` }}
          />

          <div className="absolute inset-0 p-6 flex overflow-hidden">
            <div className="w-1/4 h-full relative">
              {keySpeaker.backgroundImage && (
                <Image
                  src={keySpeaker.backgroundImage}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <div className="flex-1 p-8 overflow-hidden">
              <h1
                className={`${hornset.className} text-7xl mb-5 !text-white`}
              >
                {keySpeaker.architect}
              </h1>

              <p
                className={`${hellasFun.className} text-3xl text-white leading-relaxed`}
              >
                {keySpeaker.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1
        className={`${silverCrown.className} text-7xl text-black tracking-wider mb-6 ml-10 transition-all duration-500 ease-in-out`}
      >
        {hoveredIndex === null
          ? "PANEL TALKS"
          : content[hoveredIndex].architect}
      </h1>

      <div className="m-10 h-[70vh] flex overflow-hidden relative">
        {content.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered =
            hoveredIndex !== null && hoveredIndex !== index;

          return (
            <motion.div
              key={index}
              className="h-full cursor-pointer overflow-hidden relative"
              initial={false}
              animate={{
                flex: isHovered ? 100 : isOtherHovered ? 0.1 : 1,
                opacity: isOtherHovered ? 0 : 1,
              }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0, 0.2, 1],
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: isHovered ? 0 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                {item.backgroundImage ? (
                  <Image
                    src={item.backgroundImage}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
              </motion.div>

              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundColor: `#${item.overlay}`,
                }}
                animate={{
                  opacity: isHovered ? 1 : item.backgroundImage ? 0 : 1,
                }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                animate={{
                  opacity: isHovered ? 0 : 1,
                  x: isHovered ? -80 : 0,
                }}
                transition={{
                  duration: isHovered ? 0.1 : 0.5,
                  delay: isHovered ? 0 : 0.6,
                }}
                className="absolute inset-0"
              ></motion.div>

              <motion.div
                className="absolute inset-0 p-6 flex overflow-hidden"
                animate={{
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.4, delay: isHovered ? 0.2 : 0 }}
              >
                <motion.div
                  className="w-1/4 h-full relative"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{
                    x: isHovered ? 0 : -100,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: isHovered ? 0.3 : 0,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  {item.backgroundImage && (
                    <Image
                      src={item.backgroundImage}
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  )}
                </motion.div>

                <div className="flex-1 p-8 overflow-hidden">
                  <motion.div
                    className={`text-2xl text-white leading-relaxed`}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{
                      x: isHovered ? 0 : -100,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: isHovered ? 0.5 : 0,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <h1
                      className={`${hornset.className} text-7xl mb-5 !text-white`}
                    >
                      PANEL TALK
                    </h1>

                    <p
                      className={`${hellasFun.className} text-3xl text-white leading-relaxed`}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Lectures;
