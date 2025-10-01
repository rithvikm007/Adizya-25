import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const instagramLink = "https://www.instagram.com/adizya25/";

  return (
    <footer className="w-full bg-[var(--secondary-color)] bg-[url('/imgs/footer-bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col lg:flex-row justify-between p-4 sm:p-6 lg:p-10 gap-6 sm:gap-8 lg:gap-0 items-center">
        <div className="flex flex-col lg:flex-row lg:h-full lg:items-end items-center gap-4 sm:gap-6 lg:gap-0">
          <div className="flex flex-col items-center">
            <img src="/imgs/adizya.svg" className="w-48 lg:w-64" alt="Adizya Logo" />
            <div className="flex justify-between items-center">
              <h2 className="text-black m-0 text-4xl md:text-5xl lg:text-7xl font-silver-crown font-normal whitespace-nowrap tracking-wide">
                ADIZYA 25
              </h2>
            </div>
          </div>
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="h-min lg:mb-3"
          >
            <FaInstagram
              size={32}
              className="w-7 h-7 md:w-8 md:h-8 lg:w-12 lg:h-12"
              color="black"
            />
          </a>
        </div>

        <div className="flex flex-row w-full font-hellas-fun tracking-widest text-[#363636] lg:w-auto justify-center lg:justify-end h-min lg:mr-50">
          <div className="gap-4 sm:gap-6 lg:gap-10 lg:border-r-2 border-[#363636] flex flex-col justify-between sm:justify-start p-3 sm:p-4 lg:p-10 border-b-[#363636] sm:border-r-black">
            <Link
              href="/"
              className="text-lg lg:text-xl xl:text-3xl font-light whitespace-nowrap"
            >
              home
            </Link>
            <Link
              href="/team"
              className="text-lg lg:text-xl xl:text-3xl font-light whitespace-nowrap"
            >
              team
            </Link>
            <Link
              href="/sponsors"
              className="text-lg lg:text-xl xl:text-3xl font-light whitespace-nowrap"
            >
              sponsors
            </Link>
          </div>
          <div className="gap-4 sm:gap-6 lg:gap-10 lg:border-r-2 border-[#363636] flex flex-col justify-between sm:justify-start p-3 sm:p-4 lg:p-10 border-b-[#363636] sm:border-r-black">
            <Link
              href="/events"
              className="text-lg lg:text-xl xl:text-3xl font-light whitespace-nowrap"
            >
              events
            </Link>
            <Link
              href="/workshops"
              className="text-lg lg:text-xl xl:text-3xl font-light whitespace-nowrap"
            >
              workshops
            </Link>
            <Link
              href="/certificates"
              className="text-lg lg:text-xl xl:text-3xl font-light whitespace-nowrap"
            >
              certificates
            </Link>
          </div>
          <div className="gap-4 sm:gap-6 lg:gap-10 flex flex-col sm:justify-start p-3 sm:p-4 lg:p-10">
            <Link
              href="/register"
              className="text-lg sm:text-lg lg:text-xl xl:text-3xl font-light whitespace-nowrap"
            >
              register
            </Link>
            <Link
              href="/contact"
              className="text-lg sm:text-lg lg:text-xl xl:text-3xl font-light whitespace-nowrap"
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
