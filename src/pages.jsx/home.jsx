import Lang from "../utils/lang";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-start gap-6 px-6 pt-24 text-black dark:text-white transition-colors duration-500">
      <p className="text-2xl sm:text-3xl md:text-4xl font-medium">
        {Lang.name}
      </p>

      <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
        <h1>Web</h1>
        <h1>Developer</h1>
      </div>
    </div>
  );
};
