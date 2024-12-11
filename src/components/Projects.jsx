import React from "react";
import { PROJECTS } from "./../constants/index";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            key={index}
            className="mb-12 flex flex-col lg:flex-row justify-center items-center lg:items-center gap-6"
          >
            <div className="flex-shrink-0">
              <img
                src={project.image}
                width={500}
                height={500}
                alt={project.title}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="w-full max-w-xl text-center lg:text-left">
              <h6 className="mb-4 text-xl font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div>
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mb-2 inline-block rounded bg-neutral-700 px-3 py-1 text-sm font-medium text-purple-500"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
