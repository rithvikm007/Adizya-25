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

const content = [
  {
    architect: "Mr. John Doe",
    backgroundImage: "/imgs/architect.png",
    overlay: "D7570E",
    foregroundImage: "/imgs/arch_foreground.png",
    description:
      "An eminent Indian designer, scenographer and art curator, John Doe is the founder of the Asian Heritage Foundation and the Festival of India. He has designed several museums, cultural centres, hotels and public spaces in India and abroad. He was awarded the Padma Shri in 1986 and the Padma Bhushan in 2003 by the Government of India.",
  },
  {
    architect: "Mr. John Doe",
    overlay: "EECE7B",
    backgroundImage: "/imgs/architect.png",
    foregroundImage: "/imgs/arch_foreground.png",
    description:
      "An eminent Indian designer, scenographer and art curator, John Doe is the founder of the Asian Heritage Foundation and the Festival of India. He has designed several museums, cultural centres, hotels and public spaces in India and abroad. He was awarded the Padma Shri in 1986 and the Padma Bhushan in 2003 by the Government of India.",
  },
  {
    architect: "Mr. John Doe",
    backgroundImage: "/imgs/architect.png",
    overlay: "849E17",
    foregroundImage: "/imgs/arch_foreground.png",
    description:
      "An eminent Indian designer, scenographer and art curator, John Doe is the founder of the Asian Heritage Foundation and the Festival of India. He has designed several museums, cultural centres, hotels and public spaces in India and abroad. He was awarded the Padma Shri in 1986 and the Padma Bhushan in 2003 by the Government of India.",
  },
  {
    architect: "Mr. John Doe",
    overlay: "6777B5",
    backgroundImage: "/imgs/architect.png",
    foregroundImage: "/imgs/arch_foreground.png",
    description:
      "An eminent Indian designer, scenographer and art curator, John Doe is the founder of the Asian Heritage Foundation and the Festival of India. He has designed several museums, cultural centres, hotels and public spaces in India and abroad. He was awarded the Padma Shri in 1986 and the Padma Bhushan in 2003 by the Government of India.",
  },
  {
    architect: "Mr. John Doe",
    overlay: "6777F6",
    backgroundImage: "/imgs/architect.png",
    foregroundImage: "/imgs/arch_foreground.png",
    description:
      "An eminent Indian designer, scenographer and art curator, John Doe is the founder of the Asian Heritage Foundation and the Festival of India. He has designed several museums, cultural centres, hotels and public spaces in India and abroad. He was awarded the Padma Shri in 1986 and the Padma Bhushan in 2003 by the Government of India.",
  },
  {
    architect: "Mr. John Doe",
    overlay: "6777F6",
    backgroundImage: "/imgs/architect.png",
    foregroundImage: "/imgs/arch_foreground.png",
    description:
      "An eminent Indian designer, scenographer and art curator, John Doe is the founder of the Asian Heritage Foundation and the Festival of India. He has designed several museums, cultural centres, hotels and public spaces in India and abroad. He was awarded the Padma Shri in 1986 and the Padma Bhushan in 2003 by the Government of India.",
  },
];

const Lectures = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full min-h-screen p-10 bg-[url('/imgs/background.png')] bg-cover bg-center bg-no-repeat text-white bg-[#F9EAC6]">
      <h1 className={`${silverCrown.className} text-6xl text-black tracking-wider mb-6 transition-all duration-500 ease-in-out`}>
        {hoveredIndex === null ? "GUESTS AND MEMBERS" : content[hoveredIndex].architect}
      </h1>

      <div className="m-10 h-[70vh] flex overflow-hidden relative">
        {content.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

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
                <Image
                  src={item.backgroundImage}
                  alt="Background"
                  fill
                  className="object-cover"
                />
              </motion.div>


              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundColor: `#${item.overlay}`,
                }}
                animate={{
                  opacity: isHovered ? 1 : 0.65,
                }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                animate={{
                  opacity: isHovered ? 0 : 1,
                  x: isHovered ? -80 : 0,
                }}
                transition={{ duration: isHovered ? 0.1 : 0.5, delay: isHovered ? 0 : 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={item.foregroundImage}
                  alt="Foreground"
                  fill
                  className="object-contain object-bottom pointer-events-none"
                />
              </motion.div>

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
                  transition={{ duration: 0.6, delay: isHovered ? 0.3 : 0, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Image
                    src={item.backgroundImage}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="flex-1 p-8 overflow-hidden">                    
                    <motion.p
                      className={`${hellasFun.className} text-2xl text-white leading-relaxed`}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{
                        x: isHovered ? 0 : -100,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.7, delay: isHovered ? 0.5 : 0, ease: [0.4, 0, 0.2, 1] }}
                    >
                      {item.description}
                    </motion.p>
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