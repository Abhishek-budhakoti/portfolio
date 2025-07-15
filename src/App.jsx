import React from 'react';
import { Home } from './pages.jsx/home';
import { About } from './pages.jsx/about';
import { Contact } from './pages.jsx/conatct';
import { Projects } from './pages.jsx/projects';
import { Navbar } from './componets/navbar';
import { SocialButtons } from './componets/social';
import ThemeToggle from './componets/themeToggle';

export const App = () => {
  return (
    <div className="flex bg-blue-200 min-h-screen">
  
      <div className="fixed left-0 top-0 h-screen w-48 z-40">
        <Navbar />
      </div>

    
      <div className="ml-20 w-full overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col gap-10">
          <section id="home"><Home /></section>
          <section id="projects"><Projects /></section>
          <section id="about"><About /></section>
          <section id="contact"><Contact /></section>
        </div>
      </div>

     
      <SocialButtons />
      <ThemeToggle />
    </div>
  );
};
