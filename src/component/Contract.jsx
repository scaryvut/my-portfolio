"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CiMail } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";

const ContactsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const cardRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    tl.from(sectionRef.current, { opacity: 0, y: 40 })
      .from(titleRef.current, { opacity: 0, x: -30 }, "-=0.4")
      .from(leftRef.current, { opacity: 0, y: 20 }, "-=0.3")
      .from(cardRef.current, { opacity: 0, scale: 0.9 }, "-=0.4")
      .from(itemsRef.current, {
        opacity: 0,
        y: 10,
        stagger: 0.15,
      });
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-zinc-950 text-white px-6 md:px-20 py-24 min-h-[60vh] flex items-center font-sans overflow-hidden"
    >
      {/* BACKGROUND GLOW (same system as navbar/projects) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.10),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl w-full mx-auto">

        {/* TITLE */}
        <div ref={titleRef} className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            <span className="text-cyan-400">#</span>contacts
          </h2>

          <div className="h-[1px] bg-gradient-to-r from-cyan-500/40 to-transparent w-32 md:w-64" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

          {/* LEFT */}
          <div
            ref={leftRef}
            className="md:col-span-7 text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl"
          >
            <p>
              Open to freelance work and collaboration. If you have a project or idea,
              reach out anytime.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="md:col-span-5 flex justify-start md:justify-end">

            <div
              ref={cardRef}
              className="
                w-full max-w-xs
                bg-zinc-900/60
                backdrop-blur-md
                border border-zinc-800
                rounded-2xl
                p-6
                space-y-5
                hover:border-cyan-400/40
                transition
              "
            >

              <h3 className="text-sm font-semibold text-white tracking-wide">
                Message me
              </h3>

              {/* DISCORD */}
              <div
                ref={(el) => (itemsRef.current[0] = el)}
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-cyan-400 transition"
              >
                <FaDiscord />
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  arafatullaharshad1058
                </a>
              </div>

              {/* EMAIL */}
              <div
                ref={(el) => (itemsRef.current[1] = el)}
                className="flex items-center gap-3 text-sm text-zinc-400 hover:text-cyan-400 transition"
              >
                <CiMail />
                <a
                  href="mailto:arafatullaharshad@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  arafatullaharshad@gmail.com
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactsSection;