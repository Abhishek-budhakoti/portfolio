import { useEffect, useState } from "react";
import Lang from "../utils/lang";

export const Home = () => {
  const phrases = ["Hello 👋", `I am ${Lang.name}`,`A Web Devloper`, `${Lang.name} - Web Developer`];
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isFinalPhrase, setIsFinalPhrase] = useState(false);

  useEffect(() => {
    if (phraseIndex >= phrases.length) return;

    const currentPhrase = phrases[phraseIndex];

    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentPhrase.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
     
      if (phraseIndex === phrases.length - 1) {
        setIsFinalPhrase(true); 
        return;
      }

      const delay = setTimeout(() => {
        setPhraseIndex((prev) => prev + 1);
        setCharIndex(0);
        setDisplayedText("");
      }, 1200);

      return () => clearTimeout(delay);
    }
  }, [charIndex, phraseIndex]);

  return (
    <div className="min-h-screen flex items-center text-black dark:text-white transition-colors duration-500">
      <div className="ml-2 md:ml-1 lg:ml-1 w-full max-w-4xl px-4 sm:px-6 md:text-center lg:text-center text-left">
        <h1 className="text-4xl sm:pb-20 sm:text-6xl  md:text-5xl   xl:text-[15rem]  font-bold">
          {displayedText}
          {!isFinalPhrase && <span className="animate-pulse">|</span>}
        </h1>
      </div>
    </div>
  );
};
