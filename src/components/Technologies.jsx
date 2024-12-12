import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTensorflow, SiJupyter, SiPytorch } from "react-icons/si";
import { motion } from "framer-motion";

const iconsVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
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
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconsVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
        </motion.div>
        <motion.div
          variants={iconsVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-blue-500"></RiTailwindCssFill>
        </motion.div>
        <motion.div
          variants={iconsVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-7xl text-purple-700"></FaBootstrap>
        </motion.div>
        <motion.div
          variants={iconsVariant(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandFramerMotion className="text-7xl text-blue-900"></TbBrandFramerMotion>
        </motion.div>
        <motion.div
          variants={iconsVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTensorflow className="text-7xl text-[#FF6F00]"></SiTensorflow>
        </motion.div>
        <motion.div
          variants={iconsVariant(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPytorch className="text-7xl text-[#EE4C2C]"></SiPytorch>
        </motion.div>
        <motion.div
          variants={iconsVariant(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJupyter className="text-7xl text-[#FF5500]"></SiJupyter>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
