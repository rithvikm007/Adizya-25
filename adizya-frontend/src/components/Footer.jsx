"use client";

import Link from "next/link";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import localFont from "next/font/local";

const pearlJean = localFont({
  src: "../../public/fonts/pearl-jean.ttf",
  display: "swap",
});

const silverCrown = localFont({
  src: "../../public/fonts/SILVER_CROWN.ttf",
  display: "swap",
});

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Team", href: "/teams" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Workshops", href: "/events-and-workshops" },
  ];

  const linkIconSize = 32;
  const adizyaIconSize = 160;

  const links = [
    {
      icon: (
        <FaInstagram
          size={linkIconSize}
          className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
          color="black"
        />
      ),
      link: "https://www.instagram.com/adizya25/",
    },
    {
      icon: (
        <FaYoutube
          size={linkIconSize}
          className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
          color="black"
        />
      ),
      link: "https://www.youtube.com/@Adizya24",
    },
    {
      icon: (
        <FaLinkedin
          size={linkIconSize}
          className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
          color="black"
        />
      ),
      link: "https://www.linkedin.com/company/adizya-nit-calicut/",
    },
  ];

  return (
    <nav className="width-100">
      <div className="width-100 flex flex-col lg:flex-row gap-8 justify-between bg-[var(--secondary-color)] p-8 lg:p-20 bg-[url('/imgs/footer-bg.webp')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              className={`${pearlJean.className} text-[#363636] font-medium text-lg lg:text-2xl hover:text-gray-600`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div
          className={`flex flex-col gap-5 font-medium text-[#363636] ${pearlJean.className} text-sm lg:text-xl`}
        >
          <h3>Contact Us at adizya@nitc.ac.in</h3>
          <h3>
            National Institute of Technology Calicut Kozhikode, Kerala, 673 601,
            India
          </h3>
          <div className="flex flex-row width-100 justify-between">
            <h3>+91 62385 81131</h3>
            <h3>+91 97462 07385</h3>
          </div>
        </div>

        <div>
          <div className="flex flex-col mb-6 lg:mb-0 lg:flex-row items-center">
            <Image
              src="/imgs/adizya.svg"
              width={adizyaIconSize}
              height={adizyaIconSize}
              alt="Adizya Logo"
            />
            <h3
              className={`${silverCrown.className} text-5xl text-[#363636] text-nowrap`}
            >
              ADIZYA 25
            </h3>
          </div>
          <div className="flex gap-4 justify-center width-100 items-center">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-min"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      ={" "}
    </nav>
  );
};

export default Footer;
