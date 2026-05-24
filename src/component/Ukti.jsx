"use client";

import React from "react";
import { motion } from "framer-motion";

const DevQuote = () => {
  return (
    <section className="w-full py-24 px-6 md:px-16 bg-zinc-950 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_60%)]" />

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl rounded-2xl p-10 md:p-14"
        >

          {/* big quote mark */}
          <div className="absolute -top-10 left-6 text-cyan-400 text-7xl font-serif opacity-40">
            “
          </div>

          {/* quote text */}
          <p className="text-xl md:text-2xl leading-relaxed text-zinc-200 font-medium">
            “Great software is not built by writing more code —  
            it’s built by removing everything that doesn’t matter.”
          </p>

          {/* divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-6" />

          {/* author */}
          <div className="flex items-center justify-between">

            <p className="text-sm text-zinc-400 tracking-wide">
              — Developer Philosophy
            </p>

            <span className="text-xs text-cyan-400 tracking-[0.3em] uppercase">
              Web Developer
            </span>

          </div>

          {/* subtle accent glow */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[0_0_80px_-20px_rgba(34,211,238,0.2)]" />

        </motion.div>

      </div>
    </section>
  );
};

export default DevQuote;