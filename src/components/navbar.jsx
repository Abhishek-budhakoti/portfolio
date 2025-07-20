import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { SECTION_IDS } from "../utils/const";

const navItems = [
  { id: SECTION_IDS.HOME, label: "Home" },
  { id: SECTION_IDS.PROJECTS, label: "Projects" },
  { id: SECTION_IDS.ABOUT, label: "About" },
  { id: SECTION_IDS.CONTACT, label: "Contact" },
];

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.50,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Navbar = () => {
  return (
    <>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex fixed flex-col pt-8 pl-12 gap-5 bg-transparent text-black dark:text-white transition-colors duration-500 h-full z-50"
      >
     
        <motion.div variants={itemVariants}>
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
        </motion.div>

     
        <motion.nav
          variants={containerVariants}
          className="[writing-mode:vertical-lr] flex gap-x-7 space-y-6 text-xl"
        >
          {navItems.map(({ id, label }) => (
            <motion.div key={id} variants={itemVariants}>
              <Link
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
            </motion.div>
          ))}
        </motion.nav>
      </motion.div>

      
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
