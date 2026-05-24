"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Ideavault Platform",
    desc: "Full-stack idea sharing platform with auth, voting, and comments.",
    tech: ["Next.js", "Node", "MongoDB", "Express"],
    link: "https://idea-vault-kappa-eight.vercel.app/",
    image: "/ideavault.png",
  },
  {
    title: "QurbaniHat",
    desc: "Modern livestock marketplace built with Next.js and responsive UI.",
    tech: ["React", "Tailwind"],
    link: "https://qurbani-hat-bazar.vercel.app/",
    image: "/qurbanihat.png",
  },
  {
    title: "KeenKeeper",
    desc: "Relationship management app with analytics and interaction tracking.",
    tech: ["React", "Context API", "Tailwind", "Recharts", "React Router"],
    link: "https://keenkeeper-relationship-manager.netlify.app/",
    image: "/keenkeeper.png",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen text-white px-6 md:px-20 py-24 overflow-hidden font-sans"
    >
      {/* BASE BACKGROUND (MATCH NAVBAR EXACT) */}
      <div className="absolute inset-0 bg-zinc-950" />

      {/* CYAN AMBIENT GLOW (same system as hero/navbar) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_60%)]" />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Selected Projects
          </h2>

          <p className="text-zinc-400 mt-4 max-w-xl">
            Production-grade systems focused on performance, scalability, and clean architecture.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="
                group
                bg-zinc-900/60
                backdrop-blur-md
                border border-zinc-800
                rounded-2xl overflow-hidden
                hover:border-cyan-400/50
                transition-all duration-300
              "
            >

              {/* IMAGE */}
              <div className="h-48 overflow-hidden bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition-transform duration-500
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mt-3 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="
                        text-xs px-2 py-1 rounded-md
                        bg-zinc-950
                        border border-zinc-800
                        text-zinc-300
                        hover:border-cyan-400/50
                        transition
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="
                    inline-flex mt-6 items-center justify-center
                    px-4 py-2 rounded-md
                    bg-cyan-500 text-black
                    hover:bg-cyan-400
                    transition font-medium
                    shadow-lg shadow-cyan-500/20
                  "
                >
                  Live Demo →
                </motion.a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}