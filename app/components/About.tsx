"use client";

import { motion } from "framer-motion";
import { useState } from "react";


export default function About() {
//   const [open, setOpen] = useState(false);

  

  return (
    // <h1 className="text-accent text-2xl">About section</h1>
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center md:items-start gap-10"
    >
  {/* Image / avatar */}
  <div className="w-84 h-48 md:w-50 md:h-90 rounded-full overflow-hidden shrink-0">
    <img
      src="/sue2.jpg"
      alt="Susanna Holding"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text content */}
  <div className="flex-1">
    <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
    <p className="text-foreground mb-4">
      Hi! I’m Susanna, a passionate front-end developer with experience in
      React, TypeScript, and Next.js. I enjoy building interactive and
      user-friendly applications that combine clean design with modern
      technology.
    </p>
    <p className="text-foreground">
      I’m currently expanding my skills in full-stack development, learning
      more about backend APIs, databases, and deployment. My goal is to create
      projects that are both functional and visually appealing.
    </p>
  </div>
</section>
  )
}