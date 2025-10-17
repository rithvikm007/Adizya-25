import localFont from "next/font/local";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const August = localFont({
  src: "../../../public/fonts/August-Bold.ttf",
});

const Sponsor = () => {
  return (
    <>
      <Navbar />{" "}
      <div className="w-full min-h-screen p-6 md:p-12 lg:p-16 bg-[url('/imgs/background.webp')] bg-cover bg-center bg-no-repeat">
        <h1
          className={`${August.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center my-8 md:my-12 lg:my-16`}
        >
          Event Sponsors
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 lg:gap-24 pt-8 md:pt-12 max-w-7xl mx-auto">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <Image
              src="/imgs/sponsor1.png"
              alt="Sponsor 1"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <Image
              src="/imgs/sponsor2.png"
              alt="Sponsor 2"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 md:gap-20 lg:gap-32 mt-16 md:mt-24 lg:mt-32 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col items-center gap-10 md:gap-12 lg:gap-16">
            <h2
              className={`${August.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center px-4`}
            >
              STATIONARY PARTNER
            </h2>
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-56 md:h-56 lg:w-72 lg:h-72 relative">
              <Image
                src="/imgs/sponsor3.svg"
                alt="Sponsor 3"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center gap-10 md:gap-12 lg:gap-16">
            <h2
              className={`${August.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center px-4`}
            >
              PRINTING PARTNER
            </h2>
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-56 md:h-56 lg:w-72 lg:h-72 relative">
              <Image
                src="/imgs/sponsor4.svg"
                alt="Sponsor 4"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsor;
