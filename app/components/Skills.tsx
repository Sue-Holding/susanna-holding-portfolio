"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js",
  "Angular", "Vite", "TailwindCSS", "Framer Motion", "PWA",
  "Node.js", "Express", "PHP", "Laravel", "MongoDB", "MySQL", "MariaDB",
  "REST APIs", "Docker", "GitHub", "OAuth", "Jest", "Vitest", "Insomnia"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-20 text-center"
    >
      <h2 className="text-3xl font-bold text-primary mb-10">
        Skills & Tools
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
          }
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="
              bg-card text-foreground py-3 px-4 rounded-xl shadow
              border border-secondary/40
              font-medium
            "
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 12px var(--color-accent)"
            }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// const skills = [
//   { name: "HTML", icon: "🔶" },
//   { name: "CSS", icon: "🎨" },
//   { name: "JavaScript", icon: "⚡" },
//   { name: "TypeScript", icon: "🔷" },
//   { name: "React", icon: "⚛️" },
//   { name: "Next.js", icon: "⬛" },
//   { name: "Node.js", icon: "🌿" },
//   { name: "MongoDB", icon: "🍃" },
//   { name: "Github", icon: "🔧" },
// ];

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="max-w-5xl mx-auto px-6 py-20 text-center"
//     >
//       {/* Animated Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: false }}
//         className="text-4xl font-bold text-primary mb-12"
//       >
//         Skills & Tools
//       </motion.h2>

//       {/* Animated Skill Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
//         {skills.map((skill, i) => (
//           <motion.div
//             key={skill.name}
//             initial={{ opacity: 0, scale: 0.8, y: 20 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ delay: i * 0.05, type: "spring", stiffness: 120 }}
//             viewport={{ once: false }}
//             whileHover={{ scale: 1.15, rotate: -3 }}
//             className="
//               bg-card border border-secondary shadow-lg rounded-xl 
//               p-6 flex flex-col items-center justify-center 
//               cursor-pointer hover:bg-hover transition
//             "
//           >
//             {/* Floating Icon */}
//             <motion.div
//               animate={{
//                 y: [0, -6, 0],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.1,
//               }}
//               className="text-4xl mb-3"
//             >
//               {skill.icon}
//             </motion.div>

//             <p className="text-foreground font-medium">{skill.name}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// const skills = [
//     "HTML",
//     "CSS / Tailwind",
//     "JavaScript",
//     "TypeScript",
//     "React",
//     "Next.js",
//     "Node.js",
//     "Express",
//     "MongoDB",
//     "MySQL",
//     "PHP",
//     "Laravel",
//     "Git / GitHub",
//     "REST APIs",
//     "Responsive Design",
//   ];

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="max-w-5xl mx-auto px-6 py-20 text-center"
//     >
//       <motion.h2 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: false }}
//         className="text-3xl font-bold text-primary mb-6"
//         >
//         Skills & Competences
//       </motion.h2>

//       <motion.div 
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="flex flex-wrap justify-center gap-3"
//     >

//         {skills.map((skill) => (
//           <motion.div
//             key={skill}
//             whileHover={{ scale: 1.05 }}
//             className="px-4 py-2 rounded-lg bg-card border border-secondary text-foreground text-sm"
//           >
//             {skill}
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }
