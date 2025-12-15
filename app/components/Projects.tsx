"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Eventure Event Booking App",
      desc: "MERN stack project for booking and saving events, with administration function for creating new events.",
      link: "https://eventure-events.netlify.app/",
      code: "https://github.com/Sue-Holding/Event_Booker",
    },
    {
      title: "Meal Planner App",
      desc: "React + Node full-stack app with authentication and custom weekly meal planning.",
      link: "https://chef-mate.netlify.app/",
      code: "https://github.com/chas-academy/u09-business-project-team-sa",
    },
    {
      title: "Animal Learning API",
      desc: "Interactive toddler learning API with filtering, guessing games, and full CRUD.",
      link: "https://restful-api-animals.onrender.com",
      code: "https://github.com/Sue-Holding/animal-api",
    },
  ];

  return (
    <section 
      id="projects" 
      className="max-w-5xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-primary mb-10 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0px 0px 18px rgba(0, 255, 255, 0.35)",
              borderColor: "var(--color-accent)",
            }}
            transition={{ duration: 0.25 }}
            className="
              bg-card border border-secondary 
              p-6 rounded-xl shadow-md
              transition-all duration-300
              "
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {p.title}
            </h3>
            
            <p className="text-secondary mb-4">{p.desc}</p>

            <div className="flex gap-4">
              {p.link !== "#" && (
                <a
                  href={p.link}
                  target="_blank"
                  className="text-primary hover:text-accent"
                >
                  Visit the site
                </a>
              )}
              <a
                href={p.code}
                target="_blank"
                className="text-primary hover:text-accent"
              >
                Explore the Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}