"use client";

import { motion } from "framer-motion";

const WordPullUp = ({ text }) => {
  const words = text.split(" ");

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // delay between words
      },
    },
  };

  const word = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  return (
    <motion.div
      className="flex tex0-white flex-wrap justify-center gap-2 text-4xl font-bold"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.5, once: true }} // Trigger when 50% in view
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word}>
          {w}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WordPullUp;
