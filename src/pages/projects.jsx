import userInfo from "../utils/userInfoConfig";

export const Projects = () => {
  return (
    <section className="px-4 py-10 text-black dark:text-white transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

      {userInfo.projects.map((project) => (
        <article
          key={project.id}
          className="flex flex-col md:flex-row gap-6 mb-12 items-center"
        >

          <div className="md:w-72 md:h-60 w-full h-48 shrink-0">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.alter}
                className="block w-full h-full object-cover rounded-xl shadow hover:opacity-90 transition-opacity duration-300"
              />
            </a>
          </div>


          <div className="flex-1 text-black dark:text-white transition-colors duration-500">
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="leading-relaxed">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-black dark:text-white hover:text-blue-800 font-bold"
            >
              🔗 View Project
            </a>
          </div>

        </article>
      ))}
    </section>
  );
};
