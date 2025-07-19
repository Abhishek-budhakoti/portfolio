import React, { useState, useEffect } from "react";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Projects } from "./pages/projects";
import { Navbar } from "./components/navbar";
import { SocialButtons } from "./components/social";
import ThemeToggle from "./components/themeToggle";
import { SECTION_IDS } from "./utils/const";
import Background from "./utils/background";

export const App = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved : "dark"; // default to "dark" if no preference saved
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const sections = {
    [SECTION_IDS.HOME]: <Home />,
    [SECTION_IDS.PROJECTS]: <Projects />,
    [SECTION_IDS.ABOUT]: <About />,
    [SECTION_IDS.CONTACT]: <Contact />,
  };

  return (
    <Background theme={theme}>
     
      <div className="w-20 fixed left-0 top-0 h-screen ">
        <Navbar />
      </div>

 
      <div   id="scroll-container" className="ml-20 w-[calc(100%-5rem)] h-screen overflow-y-auto z-10">
        <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col gap-10">
          {Object.entries(sections).map(([id, Component]) => (
            <section key={id} id={id}>
              {Component}
            </section>
          ))}
        </div>
      </div>

     
      <SocialButtons />
      <ThemeToggle theme={theme} setTheme={setTheme} />
    </Background>
  );
};
