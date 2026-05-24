"use client";

import React from "react";

const SkillsSection = () => {
  const stacks = [
    {
      title: "Frontend System",
      items: ["React", "Next.js", "JavaScript", "HTML", "CSS"],
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      ],
    },
    {
      title: "Backend System",
      items: ["Node.js", "Express.js", "REST APIs"],
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      ],
    },
    {
      title: "Auth & Security",
      items: ["JWT Authentication", "Role-based Access", "Secure APIs"],
      icons: [
        "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
      ],
    },
    {
      title: "Database Layer",
      items: ["MongoDB", "MySQL", "Firebase"],
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      ],
    },
    {
      title: "Programming Core",
      items: ["Java", "C", "C++"],
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      ],
    },
    {
      title: "Tools & Workflow",
      items: ["Git", "Figma", "Postman"],
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="
        relative min-h-screen
        bg-zinc-950 text-white
        px-6 md:px-16 py-24
        flex flex-col justify-center
        overflow-hidden
      "
    >
      {/* background glow (matches navbar system) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_60%)]" />

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
            <span className="text-cyan-400">#</span>skills
          </h2>

          <div className="h-[1px] bg-gradient-to-r from-cyan-400/40 to-transparent flex-1" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {stacks.map((stack) => (
            <div
              key={stack.title}
              className="
                bg-zinc-900/70
                backdrop-blur-md
                border border-zinc-800
                p-6 rounded-xl
                hover:border-cyan-400/50
                transition-all duration-300
              "
            >

              {/* TITLE */}
              <h3 className="text-sm uppercase tracking-[0.3em] mb-4 text-cyan-400">
                {stack.title}
              </h3>

              {/* ICONS */}
              <div className="flex gap-3 mb-4 flex-wrap">
                {stack.icons.map((icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    alt="tech"
                    className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                  />
                ))}
              </div>

              {/* ITEMS */}
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3 py-1 text-xs
                      border border-zinc-700
                      rounded-md text-zinc-300
                      hover:border-cyan-400/50 hover:text-white
                      transition
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* FOOT NOTE */}
        <div className="mt-12 text-center text-xs text-zinc-500">
          Focused on scalable full-stack architecture, authentication systems & API design
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;