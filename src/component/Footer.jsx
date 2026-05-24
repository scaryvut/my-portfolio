"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "8801325184565";

  const handleSend = () => {
    if (!message.trim()) return;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
    setOpen(false);
    setMessage("");
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-zinc-950 text-white border-t border-zinc-800 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.08),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16 relative z-10">

        <div className="grid md:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              <span className="text-cyan-400">Arafatullah</span>
            </h2>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Full-stack developer focused on building fast, scalable and modern web experiences with React & Node.js.
            </p>

            <div className="flex gap-4 pt-2 text-xl">

              <a
                href="https://arafatullaharshad@gmail.com"
                target="_blank"
                className="text-zinc-400 hover:text-cyan-400 transition"
              >
                <CiMail />
              </a>

              <a
                href="https://github.com/scaryvut"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/arafatullah-arshad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/arafatullah.arshad.7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-cyan-400 transition"
              >
                <FaFacebookF />
              </a>

            </div>
          </div>

          {/* CENTER */}
          <div>
            <h3 className="text-sm text-zinc-300 mb-4 tracking-wider uppercase">
              Navigation
            </h3>

            <ul className="space-y-3">
              {links.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition text-sm relative group"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            <h3 className="text-sm text-zinc-300 uppercase tracking-wider">
              Let’s build something
            </h3>

            <p className="text-zinc-400 text-sm">
              Have an idea or project? I’m open to freelance and collaboration.
            </p>

            {/* UPDATED BUTTON (keeps same design) */}
            <button
              onClick={() => setOpen(true)}
              className="inline-block bg-cyan-500 text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-cyan-400 transition"
            >
              Contact Me
            </button>
          </div>

        </div>

        {/* bottom bar */}
        <div className="mt-14 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">

          <p>© {new Date().getFullYear()} Arafatullah. All rights reserved.</p>

          <p className="text-zinc-600">
            Built with React • Tailwind • Framer Motion
          </p>

        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-[90%] max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4"
            >

              <h2 className="text-lg font-semibold">
                Send message on WhatsApp
              </h2>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your project idea..."
                className="w-full h-32 bg-zinc-950 border border-zinc-800 rounded-md p-3 text-sm text-white outline-none focus:border-cyan-500"
              />

              <div className="flex justify-between gap-3">

                <button
                  onClick={() => setOpen(false)}
                  className="flex-1 border border-zinc-700 py-2 rounded-md text-sm"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSend}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black py-2 rounded-md text-sm font-medium"
                >
                  Send
                </button>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  );
};

export default Footer;