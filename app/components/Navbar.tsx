"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl bg-background/90
        border-b-3 border-accent shadow-[0_0_12px_var(--accent)]
      "
    >
      <div className="max-w-5xl mx-auto h-16 flex items-center justify-between">
        {/* LEFT SIDE (Logo / Name) */}
        <a
          href="/"
          className="text-2xl font-semibold text-primary ml-2 md:ml-0"
        >
          Susanna Holding
        </a>

        {/* DESKTOP NAV */}
        <div className="text-xl hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-foreground 
                hover:text-accent 
                transition
                hover:drop-shadow-[0_0_8px_var(--color-accent)]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-background/95 
            px-6 py-4 border-t 
            border-secondary"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
