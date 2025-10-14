import localFont from "next/font/local";

const hornsby = localFont({
  src: "../../../public/fonts/Hornset.ttf",
  variable: "--font-hornsby",
});
const hellasfun = localFont({
  src: "../../../public/fonts/HellasFunPlain.ttf",
  variable: "--font-hellasfun",
});

const AcknowledgementsPage = () => {
  return (
    <div className=" bg-gradient-to-b from-amber-50 via-yellow-50 to-amber-100 flex items-center justify-center px-4 md:px-8 py-12 md:py-24"
      style={{
        backgroundImage: "url(/imgs/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative top border */}
      {/* <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200"></div> */}

      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1
            className=" text-5xl sm:text-6xl md:text-7xl text-gray-800 md:tracking-widest letter-spacing-2 tracking-wider"
            style={hornsby.style}
          >
            ACKNOWLEDGEMENTS
          </h1>
          {/* <div className="w-40 h-1 bg-gray-800 mx-auto mt-8"></div> */}
        </div>

        {/* Content */}
        <div
          className="space-y-8 md:space-y-10 text-center "
          style={hellasfun.style}
        >
          {/* Paragraph 1 */}
          <p className="text-md sm:text-lg md:text-2xl leading-relaxed text-gray-700 font-light tracking-wide">
            This website stands as a testament to the collaborative efforts of
            the students of NITC, designed to elevate ADIZYA from a three-day
            event into a lasting legacy of memories. We extend our sincere
            gratitude to our fellow students for their dedication in crafting
            this digital platform, as well as to the faculty members whose
            guidance was invaluable throughout this process.
          </p>

          {/* Paragraph 2 */}
          <p className="text-md sm:text-lg md:text-2xl leading-relaxed text-gray-700 font-light tracking-wide">
            We would like to express our appreciation to the staff who worked
            diligently to ensure the success of this event, making it worthy of
            celebration online. Special thanks to{" "}
            <span className="font-semibold text-gray-800">Dr. Chitra K</span>,
            Head of the Department of Architecture and Planning, for her
            unwavering support, and to{" "}
            <span className="font-semibold text-gray-800">
              Professor Prasad Krishna
            </span>
            , the Director, and{" "}
            <span className="font-semibold text-gray-800">Dr. Babu A V</span>,
            the Dean (Academic), whose encouragement was instrumental in the
            execution of ADIZYA 25&apos;.
          </p>

          {/* Paragraph 3 */}
          <p className="text-md sm:text-lg md:text-2xl leading-relaxed text-gray-700 font-light tracking-wide">
            Together, we have created a narrative that reflects our shared
            commitment to excellence. Thank you for being part of this journey.
          </p>
        </div>

        {/* Decorative divider */}
        {/* <div className="mt-16 md:mt-20 flex justify-center">
          <div className="w-12 h-1 bg-gray-800"></div>
        </div> */}
      </div>
    </div>
  );
};

export default AcknowledgementsPage;
