"use client";

import { motion } from "framer-motion";

export default function About() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };


  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center md:items-start gap-10"
    >
      {/* Image / avatar */}
      <motion.div 
        // initial={{ opacity: 0, y: 20 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.6 }}
        // viewport={{ once: true }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        className="w-84 h-48 md:w-50 md:h-90 rounded-full overflow-hidden shrink-0"
      >
        <img
          src="/sue2.jpg"
          alt="Susanna Holding"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text content */}
      <motion.div 
        // initial={{ opacity: 0, x: 20 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{ duration: 0.6, delay: 0.2 }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-1"
      >
        {<motion.h2 
        variants={item}
          className="text-3xl font-bold text-primary mb-4"
        >
          About Me
        </motion.h2>}
        
        <motion.p variants={item} className="text-foreground mb-4">
          Hi! I’m Susanna, a passionate front-end developer with experience in
          React, TypeScript, and Next.js. I enjoy building interactive and
          user-friendly applications that combine clean design with modern
          technology.
        </motion.p>

        <motion.p variants={item} className="text-foreground">
          I’m currently expanding my skills in full-stack development, learning
          more about backend APIs, databases, and deployment. My goal is to create
          projects that are both functional and visually appealing.
        </motion.p>

        {/* <motion.div variants={item} className="mt-4 flex gap-4">
          <a
            href="https://github.com/Sue-Holding"
            target="_blank"
            className="text-primary underline hover:text-accent"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/susanna-holding-a4b14643"
            target="_blank"
            className="text-primary underline hover:text-accent"
          >
            LinkedIn
          </a>
        </motion.div> */}

      </motion.div>
    </section>
  )
}