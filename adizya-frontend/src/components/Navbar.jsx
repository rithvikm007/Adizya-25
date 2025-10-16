"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import localFont from "next/font/local";

const hellasFun = localFont({
  src: "../../public/fonts/HellasFunPlain.ttf",
  display: "swap",
});

const pearlJean = localFont({
  src: "../../public/fonts/pearl-jean.ttf",
  display: "swap",
});

const silverCrown = localFont({
  src: "../../public/fonts/SILVER_CROWN.ttf",
  display: "swap",
});

const NavBar = () => {
  const iconSize = 90;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    // Only apply initial hidden state on home page
    if (pathname === "/") {
      gsap.set(navRef.current, {
        y: -100,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      });
    } else {
      // On other pages, navbar is visible normally
      gsap.set(navRef.current, {
        y: 0,
        position: "relative",
      });
    }
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "about us" },
    { href: "/events-and-workshops", label: "workshops" },
    { href: "/lecturers", label: "lecturers" },
    { href: "/sponsors", label: "sponsors" },
    { href: "/register", label: "register" },
  ];

  return (
    <nav
      ref={navRef}
      className={`w-full bg-[var(--primary-color)] px-6 sm:px-6 py-2 ${
        pathname === "/" ? "fixed top-0 left-0 right-0 z-50" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          <a href="/">
            <img
              src="/imgs/adizya.svg"
              alt="Adizya Logo"
              width={iconSize}
              className="w-16 sm:w-20 lg:w-14 py-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ml-2"
            />
          </a>
        </div>
        <ul className="hidden lg:flex gap-8 xl:gap-12 justify-end w-full">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`hover:text-gray-600 text-[#19213E] text-2xl font-thin transition-colors duration-200 ${pearlJean.className}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span
            className={`bg-[#19213E] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-[#19213E] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-[#19213E] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className={`flex ${pearlJean.className} flex-col gap-4 py-6`}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block hover:text-gray-600 text-[#19213E] text-xl font-thin py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
