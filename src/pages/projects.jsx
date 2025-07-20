import userInfo from "../utils/userInfoConfig";
import { motion } from "framer-motion";


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export const Projects = () => {
  return (
    <motion.section
      className="px-4 py-10 text-black dark:text-white"
       variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

      {userInfo.projects.map((project) => (
        <article
          key={project.id}
          className="flex flex-col md:flex-row gap-6 mb-12 items-center"
        >

          <motion.div className="md:w-100 md:h-50 w-full h-48 shrink-0"
          
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.alter}
                className=" w-80 h-50 sm:w-80 sm:h-50  transition-opacity duration-300"
              />
            </a>
          </motion.div>


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
   </motion.section>
  );
};
