import userInfo from "../utils/userInfoConfig";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const Projects = () => {
  return (
    <section className="px-4 py-10 text-black dark:text-white">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="flex flex-col gap-12">
        {userInfo.projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="flex flex-col md:flex-row items-center gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
          
            <motion.div
              className="md:w-[320px] w-full h-auto overflow-hidden  "
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.alter}
                  className="w-full h-full object-cover"
                />
              </a>
            </motion.div>

          
            <motion.div
              className="flex-1 space-y-3 text-left"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-base leading-relaxed">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                🔗 View Project
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
