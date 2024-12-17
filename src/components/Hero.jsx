import React, { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileArrowDown } from "react-icons/fa6";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  const titles = ["Student", "Cybersecurity Aspirant", "Frontend Developer"];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000); // Change title every 2 seconds
    return () => clearInterval(interval); // Cleanup interval
  }, [titles.length]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Aavash <span className="text-neutral-500"> Bhattarai</span>
            </motion.h1>
            <AnimatePresence mode="wait">
              <motion.span
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                key={titles[currentTitle]}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ position: "relative" }}
              >
                {titles[currentTitle]}
              </motion.span>
            </AnimatePresence>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-2 max-w-xl pt-6 pb-4 font-light tracking-lighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              className="max-w-xl py-4 font-light trackin-lighter text-3xl"
              variants={container(1)}
              initial="hidden"
              animate="visible"
              title="Click here to download my CV"
            >
              <a href="/cv.pdf" target="_blank">
                <div className="flex gap-3 justify-center items-center group">
                  <p className="font-light">
                    Download <span className="text-neutral-500">CV</span>
                  </p>
                  <motion.div
                    className="flex justify-center items-center"
                    animate={{
                      y: ["0%", "-20%", "0%"],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: 5,
                      repeatDelay: 5,
                    }}
                  >
                    <FaFileArrowDown className="group-hover:text-[#50be63] " />
                  </motion.div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 1.2 }}
              className="rounded-2xl"
              src={profilePic}
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
