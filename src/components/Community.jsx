import React from "react";
import { COMMUNITY } from "../constants";
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

const Community = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Leadership and <span className="text-neutral-500"> Volunteering</span>
      </motion.h2>
      <div>
        {COMMUNITY.map((COMMUNITY, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              variants={leftVariant(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{COMMUNITY.year}</p>
            </motion.div>
            <motion.div
              variants={rightVariant(0.15)}
              initial="hidden"
              whileInView="visible"
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {COMMUNITY.title}{" "}
                {COMMUNITY.certification ? (
                  <span className="font-light">Certificate</span>
                ) : (
                  ""
                )}
              </h6>
              <p className="mb-4 text-neutral-400">{COMMUNITY.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
