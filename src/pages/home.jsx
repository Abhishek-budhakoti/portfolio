import Lang from "../utils/lang";

export const Home = () => {
  return (
    <div className="min-h-screen flex items-center text-black dark:text-white transition-colors duration-500">
      <div className="ml-5 md:ml-35 w-full max-w-4xl px-4 sm:px-6 md:text-center text-left">
        {/* Name */}
        <p className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl  font-semibold">
          {Lang.name}
        </p>


        {/* Role */}
        <div className="font-bold leading-tight space-y-1 mt-2">
          {/* Stacked on small screens */}
          <div className="block sm:hidden text-4xl">
            <h1>Web</h1>
            <h1>Developer</h1>
          </div>

          {/* Inline on larger screens */}
          <h1 className="hidden sm:block text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Web Developer
          </h1>
        </div>
      </div>
    </div>
  );
};
