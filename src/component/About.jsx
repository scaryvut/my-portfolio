"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AboutMe = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const avatarRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    tl.from(sectionRef.current, {
      opacity: 0,
      y: 40,
    })
      .from(titleRef.current, {
        opacity: 0,
        x: -30,
      })
      .from(
        textRef.current.children,
        {
          opacity: 0,
          y: 20,
          stagger: 0.12,
        },
        "-=0.4"
      )
      .from(
        avatarRef.current,
        {
          opacity: 0,
          scale: 0.85,
        },
        "-=0.6"
      )
      .from(
        btnRef.current,
        {
          opacity: 0,
          y: 10,
        },
        "-=0.4"
      );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="
        relative min-h-screen
        bg-zinc-950 text-white
        px-6 md:px-16 py-24
        flex items-center
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_60%)]" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE */}
        <div className="md:col-span-7 space-y-6">
          
          {/* Heading */}
          <div ref={titleRef} className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
              <span className="text-cyan-400">#</span>about-me
            </h2>

            <div className="h-[1px] bg-gradient-to-r from-cyan-400/40 to-transparent w-48 md:w-96" />
          </div>

          {/* About Text */}
          <div
            ref={textRef}
            className="space-y-6 text-zinc-400 text-sm md:text-base leading-relaxed tracking-wide"
          >
            <p className="text-white font-medium">
              I'm Arafatullah Arshad — Full Stack Developer.
            </p>

            <p>
              I build scalable web applications using React, Next.js, and
              Node.js with focus on performance and clean architecture.
            </p>

            <p>
              My expertise includes authentication systems (JWT, role-based
              access), APIs, and database design using MongoDB and MySQL.
            </p>

            <p>
              Currently focused on system design, backend scalability, and
              production-grade full-stack products.
            </p>
          </div>

          {/* Resume Button */}
          <div ref={btnRef} className="pt-4">
            <a
              href="https://drive.google.com/file/d/1-cxntC06v8IsrOgkMG3UGe-fpazyflFX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border border-cyan-400 text-cyan-400
                px-5 py-2 text-sm
                inline-flex items-center gap-2
                hover:bg-cyan-400/10
                transition-all duration-300
                group
              "
            >
              Resume

              <span className="group-hover:translate-y-0.5 transition-transform">
                ↓
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-5 flex justify-center items-center relative">
          
          {/* Decorative Dots */}
          <div className="absolute left-4 top-12 grid grid-cols-3 gap-2 opacity-20">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-2 opacity-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>

          <div className="absolute -right-4 -bottom-8 grid grid-cols-3 gap-2 opacity-20 hidden md:grid">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>

          {/* Avatar */}
          <div
            ref={avatarRef}
            className="relative z-10 w-64 h-64 md:w-80 md:h-80"
          >
            <img
              src="https://cdn.pixabay.com/photo/2024/09/08/08/51/man-9031564_1280.jpg"
              alt="Developer avatar"
              className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(34,211,238,0.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;