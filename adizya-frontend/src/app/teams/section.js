import Image from "next/image";
import localFont from "next/font/local";

const hornset = localFont({ src: "../../../public/fonts//Hornset.ttf" });
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
    <div className="flex mx-40 mt-20">
      <div>
        <Image
          src={image1src}
          alt={image1name}
          width={800}
          height={800}
          quality={100}
          className="self-end"
        />
        <div
          className={`${pearlJean.className} text-center mt-5 text-3xl text-[#19213E]`}
        >
          {" "}
          {image1name}
        </div>
      </div>
      <div className="flex flex-col mt-10 px-[3vw]">
        <h2
          className={`text-5xl ${hornset.className} tracking-wide text-[#19213E] text-center`}
        >
          {committee} -
        </h2>
        <p className="text-2xl mt-4 mb-6 font-hellas-fun text-center">
          {description}
        </p>
      </div>
      <div>
        <Image
          src={image2src}
          alt={image2name}
          width={800}
          height={800}
          quality={100}
          className="self-end"
        />
        <div
          className={`${pearlJean.className} text-center mt-5 text-3xl text-[#19213E]`}
        >
          {" "}
          {image2name}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
