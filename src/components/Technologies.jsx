import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTensorflow, SiJupyter } from "react-icons/si";
import { motion, optimizedAppearDataAttribute } from "framer-motion";

const iconsVariant = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -8],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconsVariant(2)}
          initial="initial"
          animate="animate"
          whileHover={{ y: 0, opacity: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine
            title="React."
            className="text-7xl text-cyan-400"
          ></RiReactjsLine>
        </motion.div>
        <motion.div
          variants={iconsVariant(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{ y: 0, opacity: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill
            title="Tailwind CSS."
            className="text-7xl text-blue-500"
          ></RiTailwindCssFill>
        </motion.div>
        <motion.div
          variants={iconsVariant(3)}
          initial="initial"
          animate="animate"
          whileHover={{ y: 0, opacity: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap
            title="Bootstrap."
            className="text-7xl text-purple-700"
          ></FaBootstrap>
        </motion.div>
        <motion.div
          variants={iconsVariant(3.5)}
          initial="initial"
          animate="animate"
          whileHover={{ y: 0, opacity: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandFramerMotion
            title="Framer Motion."
            className="text-7xl text-blue-900"
          ></TbBrandFramerMotion>
        </motion.div>
        <motion.div
          variants={iconsVariant(4)}
          initial="initial"
          animate="animate"
          whileHover={{ y: 0, opacity: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTensorflow
            title="TensorFlow."
            className="text-7xl text-[#FF6F00]"
          ></SiTensorflow>
        </motion.div>
        <motion.div
          variants={iconsVariant(4.5)}
          initial="initial"
          animate="animate"
          whileHover={{ y: 0, opacity: 0.5 }}
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJupyter
            title="Jupyter Notebook."
            className="text-7xl text-[#FF5500]"
          ></SiJupyter>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
