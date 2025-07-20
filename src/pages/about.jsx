import userInfo from "../utils/userInfoConfig.js";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center md:items-start gap-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 pt-10 md:pt-5 pb-20"
    >

      <div className=" h-48 sm:w-64 sm:h-100 md:w-[320px] md:h-[400px]  dark:bg-white bg-black rounded-xl border-2 border-black dark:border-white overflow-hidden">
        <img
          src="/photo.png"
          alt="myphoto"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="text-black dark:text-white transition-colors duration-500 flex-1 text-center md:text-left">
        <h2 className="text-1xl sm:text-3xl font-bold mb-4">
          {userInfo.about.greeting}
        </h2>
        <p className="text-sm sm:text-base whitespace-pre-line leading-relaxed">
          {userInfo.about.aboutMe}
        </p>
        <h1 className="text-2xl font-bold p-2">Skills:-</h1>
        <ul className="flex flex-wrap justify-center md:justify-start gap-3 text-sm sm:text-base">
          {userInfo.about.skills?.map((skill, index) => (
            <li
              key={index}
              className="px-3 py-1 rounded-full border border-current dark:border-white dark:text-white text-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              {skill}
            </li>

          ))}
        </ul>

      </div>
    </section>
  );
};
