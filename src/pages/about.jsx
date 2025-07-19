import userInfo from "../utils/userInfoConfig.js";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center md:items-start gap-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 pt-10 md:pt-20"
    >
      {/* Image container */}
      <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-[300px] md:h-[300px] rounded-xl border-2 border-black dark:border-white overflow-hidden">
        <img
          src="/photo.png"
          alt="myphoto"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text content */}
      <div className="text-black dark:text-white transition-colors duration-500 flex-1 text-center md:text-left">
        <h2 className="text-1xl sm:text-3xl font-bold mb-4">
          {userInfo.about.greeting}
        </h2>
        <p className="text-sm sm:text-base whitespace-pre-line leading-relaxed">
          {userInfo.about.aboutMe}
        </p>
      </div>
    </section>
  );
};
