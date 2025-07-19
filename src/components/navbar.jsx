import React from "react";
import { Link } from "react-scroll";
import { SECTION_IDS } from "../utils/const";

const navItems = [
  { id: SECTION_IDS.HOME, label: "Home" },
  { id: SECTION_IDS.PROJECTS, label: "Projects" },
  { id: SECTION_IDS.ABOUT, label: "About" },
  { id: SECTION_IDS.CONTACT, label: "Contact" },
];

export const Navbar = () => {
  return (
    <>
      <div className="flex fixed flex-col pt-8 pl-12 gap-5 bg-transparent text-black dark:text-white transition-colors duration-500 h-full">
        <Link
          to={SECTION_IDS.ABOUT}
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          containerId="scroll-container"
          className="cursor-pointer"
        >
          <div className="dark:bg-amber-50 p-1 rounded-full">
            <img src="./logo2.png" alt="Logo" className="w-12 h-12" />
          </div>
        </Link>

        <nav className="[writing-mode:vertical-lr] flex gap-x-7 space-y-6 text-xl">
          {navItems.map(({ id, label }) => (
            <Link
              key={id}
              to={id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              containerId="scroll-container"
              activeClass="text-blue-400 font-semibold"
              className="cursor-pointer transition-all hover:text-blue-400"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <a
        href="/Abhishek's-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 p-4 flex items-center gap-2 text-black dark:text-white transition-colors duration-500 hover:text-blue-700 z-50"
      >
        <span className="text-lg">📄</span>
        Resume
      </a>
    </>
  );
};
