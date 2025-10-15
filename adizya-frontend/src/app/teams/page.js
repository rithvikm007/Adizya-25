"use client";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import TeamSection from "./section";
import Image from "next/image";
import Loading from "@/components/Loading";

const teamsMems = [
  {
    committee: "PROGRAM COMMITEE",
    image1Src: "/imgs/teams/hanna.webp",
    image1Name: "HANNA",
    image2src: "/imgs/teams/rey.webp",
    image2name: "REYAN",
    description:
      "Hanna and Reyan breathe life into ADIZYA's vibrant lineup. From coordinating lectures and workshops to organizing competitions and talk shows, they create the exciting, engaging programs that define the festival.",
  },
  {
    committee: "PUBLIC RELATIONS COMMITEE (PRC)",
    image1Src: "/imgs/teams/niya.webp",
    image1Name: "NIYA",
    image2src: "/imgs/teams/niranjana.webp",
    image2name: "NIRANJANA",
    description:
      "Charged with spreading the word, Niranjana and Niya lead efforts to promote ADIZYA across campuses. Their outreach ensures maximum participation and an enthusiastic audience for every event.",
  },
  {
    committee: "MARKETING COMMITEE",
    image1Src: "/imgs/teams/abhinav.webp",
    image1Name: "ABHINAV",
    image2src: "/imgs/teams/haniya.webp",
    image2name: "HANIYA",
    description:
      "Haniya and Abhinav spearhead sponsorship acquisition, securing essential support from companies and organizations. They also welcome and mentor junior committee members to sustain and grow the team’s strengths.",
  },
  {
    committee: "MEDIA TEAM",
    image1Src: "/imgs/teams/chaman.webp",
    image1Name: "CHAMAN",
    image2src: "/imgs/teams/parthav.webp",
    image2name: "PARTHAV",
    description:
      "Capturing every moment, Chaman and Parthav's media team produces captivating videos, podcasts, and behind-the-scenes content. Their work not only documents the festival but also sharpens skills in photography, videography, and editing.",
  },
  {
    committee: "CONTENT TEAM",
    image1Src: "/imgs/teams/siri.webp",
    image1Name: "SIRI",
    image2src: "/imgs/teams/sarayu.webp",
    image2name: "SARAYU",
    description:
      "The wordsmiths of ADIZYA, Siri and Sarayu craft all written material—from official communications to creative scripts—ensuring the festival’s message is clear, engaging, and inspiring.",
  },
  {
    committee: "DESIGN TEAM",
    image1Src: "/imgs/teams/nadia.webp",
    image1Name: "NADIA",
    image2src: "/imgs/teams/jahnavi.webp",
    image2name: "JAHNAVI",
    description:
      "Jahnavi and Nadia shape the visual identity of ADIZYA through stunning posters, brochures, and digital designs. They welcome beginners eager to develop their design skills alongside the team.",
  },
  {
    committee: "POSTER AND DESIGN (PAD) TEAM",
    image1Src: "/imgs/teams/yadu.webp",
    image1Name: "YADURAJ",
    image2src: "/imgs/teams/abhinaash.webp",
    image2name: "ABHINAASH",
    description:
      "The architects of experience, Yaduraj and Abhinaash handle all spatial and visual elements including models, installations, and décor, transforming ideas into immersive festival environments.",
  },
  {
    committee: "HOSPITALITY TEAM",
    image1Src: "/imgs/teams/ayush.webp",
    image1Name: "AYUSH",
    image2src: "/imgs/teams/finu.webp",
    image2name: "FINU",
    description:
      "Ayush and Finu ensure that every guest feels welcomed and cared for. From coordinating arrival and accommodation to managing refreshment needs, they are the gracious hosts that make ADIZYA inviting and comfortable.",
  },
];

const hornset = localFont({ src: "../../../public/fonts//Hornset.ttf" });
const pearlJean = localFont({ src: "../../../public/fonts/PearlJean.otf" });
const TeamsPage = () => {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timer);
    }, []);
  return loading ? <Loading/> : (
    <div className="bg-[url('../../public/imgs/background.webp')] bg-contain bg-repeat-y text-[#040404] pb-10">
      <div className="flex flex-col p-8  items-center justify-center">
        <h3 className="font-hellas-fun text-2xl md:text-3xl font-hellas-funl">
          MEET THE
        </h3>
        <h1 className="text-5xl sm:text-6xl md:text-8xl mb-6 lg:mb-10 font-silver-crown tracking-wider text-center text-[#19213E]">
          ADIZYA 2025 Team Leads
        </h1>
        <div className="text-2xl lg:mx-[12vw] font-hellas-fun text-justify">
          At the heart of ADIZYA 2025 is a dedicated group of passionate leaders
          who bring their expertise and energy to curate an unforgettable
          festival experience. Each team leads a specialized committee, ensuring
          every aspect of the event—from planning and promotion to design and
          hospitality—is executed with excellence. Get to know the faces behind
          the scenes and their unique roles that make ADIZYA truly outstanding
        </div>
      </div>
      <div className="flex lg:mx-24 xl:mx-40">
        <div className="flex flex-col items-center justify-center">
          <div className="w-[30vw] h-40 md:w-64 md:h-64 relative ">
            <Image
              src="/imgs/teams/ananas.webp"
              alt="Ananya"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
            />
          </div>

          <div
            className={`${pearlJean.className} text-center mt-5 text-2xl md:text-3xl text-[#19213E]`}
          >
            {" "}
            ANANYA SUNU
          </div>
        </div>
        <div className="flex flex-col mt-10 px-[4vw] xl:px-[8vw]">
          <h2
            className={`text-5xl ${hornset.className} tracking-wide text-[#19213E]`}
          >
            CONVENER -
          </h2>
          <p className="text-2xl mt-4 mb-6 font-hellas-fun text-justify">
            As the Convenor, Ananya orchestrates the entire festival, overseeing
            every detail from initial planning and securing permissions to
            directing the event&apos;s seamless execution. Her leadership ensures
            that ADIZYA runs smoothly and successfully.
          </p>
        </div>
      </div>
      <div className="flex lg:mx-24 xl:mx-40 -mt-[5vw]">
        <div className="flex flex-col mt-10 px-[4vw] xl:px-[8vw] self-end">
          <h2
            className={`text-5xl ${hornset.className} tracking-wide text-right text-[#19213E]`}
          >
            TREASURER -
          </h2>
          <p className="text-2xl mt-4 mb-6 font-hellas-fun text-justify">
            Adithya manages all financial matters, maintaining a clear and
            accurate account of funds, tracking debits and credits for each
            committee, and guaranteeing responsible budgeting throughout the
            event.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[30vw] h-40 md:w-64 md:h-64 relative">
            <Image
              src="/imgs/teams/adi.webp"
              alt="Adithya"
              fill
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
              className=" object-contain "
            />
          </div>

          <div
            className={`${pearlJean.className} text-center mt-5 text-2xl md:text-3xl text-[#19213E]`}
          >
            {" "}
            ADITHYA
          </div>
        </div>
      </div>
      {teamsMems.map((member, idx) => (
        <TeamSection
          key={idx}
          committee={member.committee}
          image1src={member.image1Src}
          image1name={member.image1Name}
          image2src={member.image2src}
          image2name={member.image2name}
          description={member.description}
        />
      ))}
    </div>
  );
};
export default TeamsPage;
