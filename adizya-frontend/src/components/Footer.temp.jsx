import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const iconSize = 300;
  const instagramLink = "https://www.instagram.com/";

  return (
    <footer className="w-full bg-[var(--secondary-color)] bg-[url('/imgs/footer-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col lg:flex-row justify-between p-4 sm:p-6 lg:p-10 gap-6 sm:gap-8 lg:gap-0 items-center">
        <div className="flex flex-col lg:flex-row lg:h-full lg:items-end items-center gap-4 sm:gap-6 lg:gap-0">
          <div className="flex flex-col items-center">
            <img src="/imgs/adizya.svg" width={iconSize} alt="Adizya Logo" />
            <div className="flex justify-between items-center mt-3 sm:mt-4">
              <h2 className="text-black m-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-silver-crown font-normal whitespace-nowrap">
                ADIZYA 25
              </h2>
            </div>
          </div>
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="h-min lg:mb-3 lg:ml-6 xl:ml-10 p-0 mt-2 sm:mt-0"
          >
            <FaInstagram
              size={32}
              className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
              color="black"
            />
          </a>
        </div>

        <div className="flex flex-row w-full lg:w-auto justify-center lg:justify-end mt-4 sm:mt-0 h-min lg:mr-50">
          <div className="gap-4 sm:gap-6 lg:gap-10 border-r-2 border-black flex flex-col justify-between sm:justify-start p-3 sm:p-4 lg:p-10 border-b-black sm:border-r-black">
            <Link
              href="/"
              className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-[#19213E] font-light whitespace-nowrap"
            >
              home
            </Link>
            <Link
              href="/team"
              className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-[#19213E] font-light whitespace-nowrap"
            >
              team
            </Link>
            <Link
              href="/sponsors"
              className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-[#19213E] font-light whitespace-nowrap"
            >
              sponsors
            </Link>
          </div>
          <div className="gap-4 sm:gap-6 lg:gap-10 border-r-2 border-black flex flex-col justify-between sm:justify-start p-3 sm:p-4 lg:p-10 border-b-black sm:border-r-black">
            <Link
              href="/events"
              className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-[#19213E] font-light whitespace-nowrap"
            >
              events
            </Link>
            <Link
              href="/workshops"
              className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-[#19213E] font-light whitespace-nowrap"
            >
              workshops
            </Link>
            <Link
              href="/certificates"
              className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-black font-light whitespace-nowrap"
            >
              certificates
            </Link>
          </div>
          <div className="gap-4 sm:gap-6 lg:gap-10 flex flex-col justify-between sm:justify-start p-3 sm:p-4 lg:p-10">
            <Link
              href="/"
              className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-black font-light whitespace-nowrap"
            >
              register
            </Link>
            <Link
              href="/team"
              className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-black font-light whitespace-nowrap"
            >
              contact
            </Link>
          </div>
        </div>
      </div>
      <div className="h-12 sm:h-14 lg:h-16 bg-[var(--primary-color)]"></div>
    </footer>
  );
};

export default Footer;
