"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
];

const fadeVariant = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02, transition: { duration: 0.2 } },
};

const Lectures = () => {
  const [active, setActive] = useState(null);

  const activeContent = active !== null ? content[active] : null;

  return (
    <div className="w-full min-h-screen p-10 bg-[#FFFDD0] text-white">
      <h1 className="text-6xl text-black font-silver-crown tracking-wider mb-6 transition-all duration-500 ease-in-out">
        {active === null ? "GUESTS AND MEMBERS" : activeContent.architect}
      </h1>

      <div className="m-10 h-[75vh] flex overflow-hidden">
        <AnimatePresence mode="wait">
          {active === null ? (
            <motion.div
              key="grid"
              variants={fadeVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex h-full w-full"
            >
              {content.map((item, index) => (
                <div 
                  key={index}
                  className="relative h-full flex-1 cursor-pointer transition-all duration-500 ease-in-out"
                  onClick={() => setActive(index)}
                >
                  <Image
                    src={item.backgroundImage}
                    alt="Background"
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundColor: `#${item.overlay}`,
                      opacity: 0.65,
                    }}
                  ></div>
                  <Image
                    src={item.foregroundImage}
                    alt="Foreground"
                    fill
                    className="object-contain object-bottom pointer-events-none"
                  />
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              variants={fadeVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="relative flex h-full w-full cursor-pointer p-6"
              style={{ backgroundColor: `#${activeContent.overlay}` }}
              onClick={() => setActive(null)}
            >
              <div className="relative w-1/5 h-full">
                <Image
                  src={activeContent.backgroundImage}
                  alt="Background"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="ml-10 text-2xl text-white font-hellas-fun w-2/3">
                {activeContent.description}
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Lectures;