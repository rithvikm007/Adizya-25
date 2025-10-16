import React, { useState } from "react";
import localFont from "next/font/local";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const hellasFun = localFont({
  src: "../../../public/fonts/HellasFunPlain.ttf",
  variable: "--font-hellas-fun",
  display: 'swap',
});

const hornset = localFont({
  src: "../../../public/fonts/Hornset.ttf",
  display: 'swap',
});

const LecturesMobile = ({index, architect, image, description, backgroundColor, textColor, setHoveredIndex }) => {
  const [toggle, setToggle] = useState(false);

  const toggleTab = () => {
    if(toggle) {
      setToggle(false);
      setHoveredIndex(null);
    } else {
      setToggle(true);
      setHoveredIndex(index);
    }
  }

  return (
    <div key={index} style={{ backgroundColor: `#${backgroundColor}` }}>
      <div 
        className="flex justify-between items-center p-3 sm:p-4 w-full cursor-pointer" 
        style={{ color: textColor }}
        onClick={toggleTab} 
      >
        <h2 className={`${hellasFun.className} text-lg sm:text-xl font-semibold`}>
          {architect}
        </h2>
        {toggle ? (
          <Minus
            className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 transition-transform duration-300"
            style={{ color: textColor }}
          />
        ) : (
          <Plus
            className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 transition-transform duration-300"
            style={{ color: textColor }}
          />
        )}
      </div>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          toggle ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 sm:px-6 pb-4 sm:pb-6">
            {image && (
              <div className="relative w-full h-48 sm:h-64 md:h-80 mt-2 mb-4">
                <Image
                  src={image}
                  alt={architect}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {image ? (
              <p 
                className={`${hellasFun.className} text-md lg:text-lg leading-relaxed`}
                style={{ color: textColor }}
              >
                {description}
              </p>
            ) : <p 
                className={`${hellasFun.className} text-md lg:text-lg leading-relaxed`}
                style={{ color: textColor }}
              >
                Coming Soon...
              </p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturesMobile;