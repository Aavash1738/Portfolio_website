import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const rightVariant = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.75,
    },
  },
});

const leftVariant = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.75,
    },
  },
});

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education and Professional{" "}
        <span className="text-neutral-500"> Certifications</span>
      </motion.h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              variants={leftVariant(0.2)}
              initial="hidden"
              whileInView="visible"
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </motion.div>
            <motion.div
              variants={rightVariant(0.15)}
              initial="hidden"
              whileInView="visible"
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {education.institute}{" "}
                {education.certification ? (
                  <span className="font-light">Certificate</span>
                ) : (
                  ""
                )}
              </h6>
              <p className="mb-4 text-neutral-400">{education.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
