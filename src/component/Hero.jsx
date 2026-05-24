"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";

const PortfolioHero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  // Smooth scroll (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // GSAP animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(heroRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
    })
      .from(
        ".gsap-item",
        {
          opacity: 0,
          y: 20,
          stagger: 0.12,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
        },
        "-=0.6"
      );
  }, []);

  return (
    <div
      ref={heroRef}
      className="min-h-screen bg-zinc-950 text-white flex items-center px-6 md:px-16 pt-24 relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          <div className="gsap-item text-cyan-400 text-xs tracking-[0.35em] uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Available for work
          </div>

          <h1 className="gsap-item text-4xl md:text-6xl font-semibold leading-tight">
            I build{" "}
            <span className="text-cyan-400">fast</span>,{" "}
            <span className="text-emerald-400">scalable</span>{" "}
            web systems that feel instant.
          </h1>

          <p className="gsap-item text-zinc-300 max-w-md">
            Full-stack developer focused on performance engineering, clean architecture, and production-ready systems.
          </p>

          <div className="gsap-item text-sm text-zinc-500 flex gap-2 flex-wrap">
            <span>React</span> • <span>Node.js</span> • <span>Next.js</span> • <span>MongoDB</span>
          </div>

          {/* BUTTONS (FIXED NAVIGATION) */}
          <div className="gsap-item flex gap-4 pt-4">

            {/* VIEW PROJECTS */}
            <a
              href="#projects"
              className="bg-cyan-500 text-black font-semibold px-6 py-2 rounded-md hover:bg-cyan-400 transition hover:scale-[1.03] shadow-lg shadow-cyan-500/20"
            >
              View Projects
            </a>

            {/* CONTACT / WHATSAPP */}
            <a
              href="#contact"
              className="border border-zinc-700 text-zinc-300 px-6 py-2 rounded-md hover:border-cyan-400 hover:text-white transition"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end">

          <div ref={imageRef} className="relative w-72 h-96 md:w-80 md:h-[420px]">

            <div className="absolute inset-0 border border-cyan-500/20 rounded-lg" />

            <img
              src="/IMG_ 8510.jpg"
              alt="profile"
              className="w-full h-full object-cover object-top rounded-lg contrast-110 saturate-110 hover:saturate-125 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg" />

            <div className="absolute bottom-0 w-full bg-zinc-950/80 border-t border-zinc-800 p-3 backdrop-blur-md">
              <span className="text-emerald-400">●</span>{" "}
              <span className="text-zinc-300 text-xs">
                Building production-grade web apps
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default PortfolioHero;