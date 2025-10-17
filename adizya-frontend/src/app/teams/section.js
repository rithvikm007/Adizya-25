import Image from "next/image";
import localFont from "next/font/local";

const hornset = localFont({ src: "../../../public/fonts/Hornset.ttf" });
const pearlJean = localFont({ src: "../../../public/fonts/PearlJean.otf" });

const TeamSection = ({
  committee,
  image1src,
  image1name,
  image2name,
  image2src,
  description,
}) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex xl:mx-40 mt-12 items-center justify-between  w-full">
        <div className="flex flex-col items-center ">
          <div className="relative w-[30vw] h-40 md:w-64 md:h-64 ">
            <Image
              src={image1src}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
              alt={image1name}
              fill
              className="object-contain"
            />
          </div>
          <div
            className={`${pearlJean.className} text-center mt-5 text-2xl md:text-3xl text-[#19213E]`}
          >
            {image1name}
          </div>
        </div>
        <div className="flex flex-col items-center text-center px-[3vw]">
          <h2
            className={`md:text-5xl text-4xl ${hornset.className} tracking-wide text-[#19213E]`}
          >
            {committee} <span className="hidden md:inline">-</span>
          </h2>
          <p className="text-2xl mt-4 mb-6 font-hellas-fun text-center hidden md:block">
            {description}
          </p>
        </div>

        {image2src ? (
          <div className="flex flex-col items-center">
            <div className="relative w-[30vw] h-40 md:w-64 md:h-64">
              <Image
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
                src={image2src}
                alt={image2name}
                fill
                className="object-contain"
              />
            </div>
            <div
              className={`${pearlJean.className} text-center mt-5 text-2xl md:text-3xl text-[#19213E]`}
            >
              {image2name}
            </div>
          </div>
        ) : (
          // invisible placeholder to preserve layout when there is no second image
          <div className="flex flex-col items-center invisible" aria-hidden="true">
            <div className="relative w-[30vw] h-40 md:w-64 md:h-64" />
            <div
              className={`${pearlJean.className} text-center mt-5 text-2xl md:text-3xl`}
            >
              {/* empty to keep vertical space */}
            </div>
          </div>
        )}
      </div>

      <p className="text-2xl mt-4 mb-6 font-hellas-fun text-center mx-5 md:hidden">
        {description}
      </p>
    </div>
  );
};

export default TeamSection;
