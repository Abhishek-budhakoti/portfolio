import React from 'react';
import { Link } from 'react-scroll';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

export const Navbar = () => {
  return (
    <>

      <div className="flex fixed flex-col p-5 gap-8 bg-transparent text-black dark:text-white transition-colors duration-500">
        <h1 className="mb-6 text-3xl tracking-widest">Logo</h1>

        <nav className="[writing-mode:vertical-lr] flex gap-x-4 space-y-6 text-xl">
          {navItems.map(({ id, label }) => (
            <Link
              key={id}
              to={id}
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-blue-400 font-semibold"
              className="cursor-pointer transition-all hover:text-blue-400"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>


      <a
        href="/Abhishek_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 flex items-center gap-2 text-black dark:text-white transition-colors duration-500 hover:text-blue-700 z-50"
      >
        <span className="text-lg text-bold text-black dark:text-white transition-colors duration-500">📄</span>
        Resume
      </a>
    </>
  );
};
