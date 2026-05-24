"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // DARK MODE FIX (PROPER)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);

      gsap.to("header", {
        backgroundColor: isScrolled
          ? "rgba(9, 9, 11, 0.85)"
          : "rgba(9, 9, 11, 0)",
        backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
        paddingTop: isScrolled ? "12px" : "20px",
        paddingBottom: isScrolled ? "12px" : "20px",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const container = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -8 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-transparent"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16">

          {/* LOGO */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-lg font-semibold tracking-wide text-white dark:text-white"
          >
            <span className="text-cyan-400">Arafatullah</span>
          </motion.a>

          {/* NAV LINKS */}
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((nav) => (
              <motion.li key={nav.name} variants={item}>
                <a
                  href={nav.href}
                  className="relative text-sm text-zinc-400 hover:text-white transition group"
                >
                  {nav.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">

            {/* HIRE ME */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setOpenModal(true)}
              className="hidden md:block bg-cyan-500 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-400 transition"
            >
              Hire Me
            </motion.button>

            {/* THEME TOGGLE */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md border border-zinc-800 bg-zinc-900 text-white hover:border-cyan-400 transition"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* MOBILE MENU ICON */}
            <button className="md:hidden flex flex-col gap-1">
              <span className="w-6 h-[2px] bg-white" />
              <span className="w-6 h-[2px] bg-white" />
              <span className="w-6 h-[2px] bg-white" />
            </button>

          </div>
        </nav>
      </motion.header>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">

          <div className="bg-zinc-900 text-white w-[90%] max-w-md p-6 rounded-2xl border border-zinc-700 relative">

            {/* CLOSE BUTTON (FIXED VISIBILITY) */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-white hover:text-cyan-400 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-3">Contact Me</h2>

            <p className="text-sm text-zinc-400 mb-4">
              Send your message directly:
            </p>

            <a
              href="mailto:arafatullaharshad@gmail.com"
              className="text-cyan-400 underline"
            >
              arafatullaharshad@gmail.com
            </a>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;