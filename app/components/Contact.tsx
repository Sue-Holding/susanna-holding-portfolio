"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-20 text-center"
    >
      <h2 className="text-3xl font-bold text-primary mb-6">Reach Out</h2>
      <p className="text-foreground mb-4">
        I'd love to connect! You can reach me on:
      </p>

      <div className="flex justify-center gap-6 text-primary">
        <a
          href="https://github.com/Sue-Holding"
          target="_blank"
          className="
            hover:text-accent
            hover:drop-shadow-[0_0_8px_var(--color-accent)]
            transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/susanna-holding-a4b14643"
          target="_blank"
          className="
            hover:text-accent
            hover:drop-shadow-[0_0_8px_var(--color-accent)]
            transition"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-foreground mt-4">
          Feel free to email me {" "}
          <a
            href="mailto:sue.holding55@gmail.com"
            className="
              text-primary hover:text-accent transition
              hover:text-accent
              hover:drop-shadow-[0_0_8px_var(--color-accent)]
              transition
              "
            >
              sue.holding55@gmail.com
            </a>
      </p>
    </section>
  );
}