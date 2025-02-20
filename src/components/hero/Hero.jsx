import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

// VARIANTS
const textVariants = {
  inital: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  inital: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

// HERO COMPONENT
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="inital"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SHIIVAM MISHRA</motion.h2>
          <motion.h1 variants={textVariants}>Web developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <button
              variants={textVariants}
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://drive.google.com/file/d/1K8xjoJRPf8ZRjILlWgm16HgczRnvn6yF/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              RESUME
            </button>

            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="img" />
      </div>
    </div>
  );
};

export default Hero;
