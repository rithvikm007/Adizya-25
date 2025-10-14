import React, { useState } from "react";
import localFont from "next/font/local";
import { Plus, Minus } from "lucide-react";

const hellasFun = localFont({
  src: "../../../public/fonts/HellasFunPlain.ttf",
  variable: "--font-hellas-fun",
});


const hornset = localFont({
  src: "../../../public/fonts/Hornset.ttf",
});

const LecturesMobile = ({ architect, image, description, backgroundColor, textColor }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div style={{ backgroundColor: `#${backgroundColor}` }}>
      <div className="flex justify-between items-center p-4 w-full" style={{ color: `${textColor}` }}>
        <h2 className={`${hellasFun.className} text-xl font-semibold`}>{architect}</h2>
        {toggle ? (
              <Minus
                className={`h-5 w-5 ${textColor} cursor-pointer`}
            onClick={() => setToggle(false)}
          />
        ) : (
          <Plus
            className={`h-5 w-5 ${textColor} cursor-pointer`}
            onClick={() => setToggle(true)}
          />
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          toggle ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6">
          {image && (
            <img
              src={image}
              alt={architect}
              className="w-full h-auto mt-2"
            />
          )}
          {image && <p className={`${hellasFun.className} text-${textColor} my-6 text-lg`}>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default LecturesMobile;
