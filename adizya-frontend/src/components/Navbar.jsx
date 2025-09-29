"use client";

import { useState } from "react";

const NavBar = () => {
  const iconSize = 90;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/about", label: "about us" },
    { href: "/workshops", label: "workshops" },
    { href: "/lecturers", label: "lecturers" },
    { href: "/sponsors", label: "sponsors" },
    { href: "/register", label: "register" },
  ];

  return (
    <nav className="w-full bg-[var(--primary-color)] px-6 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          <img
            src="/imgs/adizya.svg"
            alt="Adizya Logo"
            width={iconSize}
            className="w-16 sm:w-20 lg:w-24"
          />
        </div>
        <ul className="hidden lg:flex gap-8 xl:gap-20 justify-center w-full">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-gray-600 text-[#19213E] text-2xl font-thin transition-colors duration-200"
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
        <ul className="flex flex-col gap-4 py-6">
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
