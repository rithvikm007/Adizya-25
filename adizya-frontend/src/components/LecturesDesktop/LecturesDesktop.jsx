"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const hellasFun = localFont({
  src: "../../../public/fonts/HellasFunPlain.ttf",
  variable: "--font-hellas-fun",
});

const hornset = localFont({
  src: "../../../public/fonts/Hornset.ttf",
});

const LecturesDesktop = ({
  index,
  isHovered,
  isOtherHovered,
  backgroundImage,
  overlay,
  description,
  setHoveredIndex,
  textColor,
  innerTitle
}) => {
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
        {backgroundImage ? (
          <Image
            src={backgroundImage}
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
          backgroundColor: `#${overlay}`,
        }}
        animate={{
          opacity: isHovered ? 1 : backgroundImage ? 0 : 1,
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
          {backgroundImage && (
            <Image
              src={backgroundImage}
              alt="Profile"
              fill
              className="object-cover"
            />
          )}
        </motion.div>

        <div className="flex-1 p-8 overflow-hidden">
          <motion.div
            className={`text-2xl text-[${textColor}] leading-relaxed`}
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
            {backgroundImage ? (
              <>
                <h1
                  className={`${hornset.className} text-7xl mb-5`}
                  style={{ color: `${textColor}` }}
                >
                  {innerTitle}
                </h1>

                <p
                  className={`${hellasFun.className} text-3xl leading-relaxed`}
                  style={{ color: `${textColor}` }}
                >
                  {description}
                </p>
              </>
            ) :  <h1
                  className={`${hornset.className} text-7xl mb-5`}
                  style={{ color: `${textColor}` }}
                >
                  Coming Soon...
                </h1>}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LecturesDesktop;
