"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";

const LecturesDesktop = dynamic(
  () => import("../../components/LecturesDesktop/LecturesDesktop"),
  {
    ssr: false,
  }
);
const LecturesMobile = dynamic(
  () => import("../../components/LecturesMobile/LecturesMobile"),
  {
    ssr: false,
  }
);

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

const hellasFunBold = localFont({
  src: "../../../public/fonts/HellasFunBold.ttf"
})

const keySpeaker = {
  architect: "AR. DEAN D'CRUZ",
  backgroundImage: "/imgs/dean.webp",
  backgroundColor: "9A2806",
  description:
    "A graduate from J. J. college of architecture, Mumbai, set up practice in Goa in 1989, continuing to co-found Mozaic Design architectural wing in 2001. He has conducted numerous workshops and seminars on architecture, planning and environment, with works and articles published in leading magazines in India and abroad. Having designed over 250 houses, 50 hotels, 30 housing complexes, 30 institutions, offices and factories, Dean is recipient of multiple awards. His current efforts are aimed at improving academic standards across the country through awareness of criteria that address environmental and social issues in architecture and planning; all made possible through workshops, master classes and his presence as a jury member on a large number of award platforms.",
};


const content = [
  {
    architect: "Ar. Shyam Raj Chandroth ",
    backgroundImage: "/imgs/ShyamRaj.webp",
    overlay: "A6360F",
    textColor: "#FFFFFF",
    description:
      "Ar. Shyamraj Chandroth graduated from the Government Engineering College in Thrissur in 2011. He started his career at MR Associates as an associate architect. He established his own firm named Viewpoint Designs in 2013, based in Thrissur, and later established 7th Hue Architecture Studio as a sister concern in 2022. Starting with private residences, the firm now handles projects like group villas, apartments, commercial buildings, office buildings, shopping malls, multiplexes, educational institutions, and resorts all over Kerala.",
  },
  {
    architect: "Ar. Guru Prasanna",
    overlay: "D7570E",
    backgroundImage: "/imgs/SIR.webp",
    textColor: "#FFFFFF",
    description:
      "Guru Prasanna, after completing his architectural education at the NIT, Tiruchirappalli, and professional training from reputed firms like DAAT (Delhi), Venkatraman Associates (Bangalore), and Brand New Day (Auroville), started his practice under the name of Gargoyle Architecture and Interiors and worked on many residential, commercial and planning projects. After five years of field experience; in 2006 he adjourned to travel and pursue his education in Urban Design and Urban Development (MUDD) at the University of New South Wales, Sydney. Since his return in 2007, he has continued to work as the principal of his current firm BETWEENLINES.",
  },
  {
    architect: "Ar. Sridevi Changali",
    backgroundImage: "/imgs/Sridevi.webp",
    overlay: "EECE7B",
    textColor: "#434343",
    description:
      "Ar. Sridevi Changali, Co-founder of masonsinkarchitecture, an architect dedicated to sustainable design and heritage conservation. With her extensive experience in restoring city-level and building-level heritage projects, Sridevi brings a unique blend of ecological sensitivity and modern architectural wisdom to the forefront.",
  },
  {
    architect: "Coming Soon...",
    overlay: "6777B5",
    backgroundImage: null,
    textColor: "#FFFFFF",
    description:
      "An eminent Indian designer, scenographer and art curator, John Doe is the founder of the Asian Heritage Foundation and the Festival of India. He has designed several museums, cultural centres, hotels and public spaces in India and abroad. He was awarded the Padma Shri in 1986 and the Padma Bhushan in 2003 by the Government of India.",
  },
  {
    architect: "Comming Soon...",
    overlay: "6777F6",
    backgroundImage: null,
    textColor: "#FFFFFF",
    description:
      "An eminent Indian designer, scenographer and art curator, John Doe is the founder of the Asian Heritage Foundation and the Festival of India. He has designed several museums, cultural centres, hotels and public spaces in India and abroad. He was awarded the Padma Shri in 1986 and the Padma Bhushan in 2003 by the Government of India.",
  },
  {
    architect: "Coming Soon...",
    overlay: "6777F6",
    backgroundImage: null,
    textColor: "#FFFFFF",
    description:
      "An eminent Indian designer, scenographer and art curator, John Doe is the founder of the Asian Heritage Foundation and the Festival of India. He has designed several museums, cultural centres, hotels and public spaces in India and abroad. He was awarded the Padma Shri in 1986 and the Padma Bhushan in 2003 by the Government of India.",
  },
];

const lecturers = [
  {
    architect: "Ar. Dean D'Cruz",
    backgroundImage: "/imgs/dean.webp",
    overlay: "A6360F",
    textColor: "#FFFFFF",
    description:
      "A graduate from J. J. college of architecture, Mumbai, set up practice in Goa in 1989, continuing to co-found Mozaic Design architectural wing in 2001. He has conducted numerous workshops and seminars on architecture, planning and environment, with works and articles published in leading magazines in India and abroad. Having designed over 250 houses, 50 hotels, 30 housing complexes, 30 institutions, offices and factories, Dean is recipient of multiple awards. His current efforts are aimed at improving academic standards across the country through awareness of criteria that address environmental and social issues in architecture and planning; all made possible through workshops, master classes and his presence as a jury member on a large number of award platforms."
  },
  {
    architect: "Ar. Guru Prasanna",
    overlay: "D7570E",
    backgroundImage: "/imgs/SIR.webp",
    textColor: "#FFFFFF",
    description:
      "Guru Prasanna, after completing his architectural education at the NIT, Tiruchirappalli, and professional training from reputed firms like DAAT (Delhi), Venkatraman Associates (Bangalore), and Brand New Day (Auroville), started his practice under the name of Gargoyle Architecture and Interiors and worked on many residential, commercial and planning projects. After five years of field experience; in 2006 he adjourned to travel and pursue his education in Urban Design and Urban Development (MUDD) at the University of New South Wales, Sydney. Since his return in 2007, he has continued to work as the principal of his current firm BETWEENLINES.",
  },
  {
    architect: "Fabien Charuau",
    backgroundImage: "/imgs/events-workshops/bts3.webp",
    overlay: "EECE7B",
    textColor: "#434343",
    description:
      "Fabien Charuau has showcased his work in several solo exhibitions, blending photography and digital art. The Stumble Asleep (2010) at Matthieu Foss Gallery in Mumbai was praised for its honest portrayal of rural Indian men, while A Thousand Kisses Deep (2015) at Chatterjee & Lal explored the beauty within the flood of digital images. Other exhibitions, like Ways of the Road (2013) and Send Some Candids (2011), combined photography with new media to explore themes like voyeurism and societal norms. These opportunities reflect Fabien’s passion for storytelling and experimentation through images.",
  },
  {
    architect: "Chandan Sinha",
    overlay: "849E17",
    backgroundImage: "/imgs/sinha.png",
    textColor: "#FAEAE1",
    description:
      "Technical Director- Urban & Master Planning Lead-India in AECOM. A Government & Public Sector Consulting Leader & Urban Development Expert. Extensive experiences in Project Management for Construction of Mega Government Projects, Master Planning, Healthcare planning, Smart Cities, Municipal Bonds, Infrastructure development plans, Zonal Development Plan, City Development Plan, Tourism, advisory services in Financial Operating Plan, Urban land Management, Policy framework, Development strategies and Municipal/ local planning practices."
  },
];

const Lectures = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [renderMobile, setRenderMobile] = useState(false);
  const [secondHoveredIndex, setSecondHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  useEffect(() => {
    setRenderMobile(isMobile);
  }, [isMobile]);

  return loading ? <Loading /> : (
    <div className="w-full min-h-screen p-10 bg-[url('/imgs/background.webp')] bg-cover bg-center bg-no-repeat text-white bg-[#F9EAC6]">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <h1
          className={`${silverCrown.className} text-7xl text-black tracking-wider text-center lg:text-left lg:mb-6 md:ml-10`}
        >
          KEY SPEAKER
        </h1>
        <h2 className={`text-lg md:text-4xl mt-6 md:mt-0 text-[#3B3B3B] ${hellasFunBold.className} md:mr-10 font-extrabold`}>lecture on 26th Oct, 2:00-3:30 pm</h2>
      </div>

      <div className="my-4 md:mx-10 h-auto md:h-[70vh] flex overflow-hidden relative mb-10 md:mb-20">
        <div className="h-full w-full overflow-hidden relative">
          <div className="absolute inset-0 hidden md:block">
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
            className="absolute inset-0 hidden md:block"
            style={{ backgroundColor: `#${keySpeaker.backgroundColor}` }}
          />
          <div className="relative md:absolute inset-0 p-0 md:p-6 flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-1/4 h-64 md:h-full relative flex-shrink-0">
              {keySpeaker.backgroundImage && (
                <Image
                  src={keySpeaker.backgroundImage}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div
              className="flex-1 p-4 sm:p-6 md:p-8 overflow-hidden md:bg-transparent"
              style={{ backgroundColor: `#${keySpeaker.backgroundColor}` }}
            >
              <h1
                className={`${hornset.className} text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center lg:text-left mb-3 sm:mb-4 md:mb-5 !text-white`}
              >
                {keySpeaker.architect}
              </h1>
              <p
                className={`${hellasFun.className} text-center lg:text-left text-base sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed`}
              >
                {keySpeaker.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1
        className={`${silverCrown.className} text-7xl text-black tracking-wider transition-all duration-500 ease-in-out mb-6 text-center lg:text-left md:ml-10`}
      >
        {hoveredIndex === null
          ? "PANEL TALKS"
          : content[hoveredIndex].architect}
      </h1>

      <div className="lg:m-10 flex flex-col gap-4 lg:flex-row lg:h-[70vh] overflow-hidden relative">
        {content.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered =
            hoveredIndex !== null && hoveredIndex !== index;
          return renderMobile ? (
            <LecturesMobile
              key={index}
              architect={item.architect}
              image={item.backgroundImage}
              overlay={item.overlay}
              description={item.description}
              textColor={item.textColor}
              index={index}
              isHovered={isHovered}
              isOtherHovered={isOtherHovered}
              setHoveredIndex={setHoveredIndex}
              backgroundColor={item.overlay}
            />
          ) : (
            <LecturesDesktop
              index={index}
              architect={item.architect}
              backgroundImage={item.backgroundImage}
              overlay={item.overlay}
              description={item.description}
              key={index}
              isHovered={isHovered}
              isOtherHovered={isOtherHovered}
              setHoveredIndex={setHoveredIndex}
              textColor={item.textColor}
              innerTitle={"PANEL TALK"}
            />
          );
        })}
      </div>
      <h1
        className={`${silverCrown.className} mt-10 lg:mt-0 text-7xl text-black tracking-wider transition-all duration-500 ease-in-out mb-6 text-center lg:text-left md:ml-10`}
      >
        LECTURERS
      </h1>

      <div className="lg:m-10 flex flex-col gap-4 lg:flex-row lg:h-[70vh] overflow-hidden relative">
        {lecturers.map((item, index) => {
          const isHovered = secondHoveredIndex === index;
          const isOtherHovered =
            secondHoveredIndex !== null && secondHoveredIndex !== index;
          return renderMobile ? (
            <LecturesMobile
              key={index}
              architect={item.architect}
              image={item.backgroundImage}
              overlay={item.overlay}
              description={item.description}
              textColor={item.textColor}
              index={index}
              isHovered={isHovered}
              isOtherHovered={isOtherHovered}
              setHoveredIndex={setSecondHoveredIndex}
              backgroundColor={item.overlay}
            />
          ) : (
            <LecturesDesktop
              index={index}
              architect={item.architect}
              backgroundImage={item.backgroundImage}
              overlay={item.overlay}
              description={item.description}
              key={index}
              isHovered={isHovered}
              isOtherHovered={isOtherHovered}
              setHoveredIndex={setSecondHoveredIndex}
              textColor={item.textColor}
              innerTitle={item.architect}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Lectures;
