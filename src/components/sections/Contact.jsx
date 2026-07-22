"use client";

import { useRef } from "react";
import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.1 });

  const auroraAnim1 = inView
    ? { scale: [1, 1.12, 1], x: [0, 25, -20, 0] }
    : { scale: 1, x: 0 };

  const auroraAnim2 = inView
    ? { scale: [1, 0.95, 1.08], y: [0, -30, 25, 0] }
    : { scale: 1, y: 0 };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    form.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const data = await response.json();

    if (data.success) {
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully! I'll reply soon.");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="Contact"
      ref={sectionRef}
      className="min-h-screen py-20 relative overflow-hidden bg-gray-50 dark:bg-[#05050A]"
    >
      {/* Subtle Aurora Background (consistent with Home) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 40%, #00F5FF 10%, transparent 65%)",
            filter: "blur(110px)",
            opacity: 0.18,
          }}
          animate={auroraAnim1}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 65%, #A855F7 12%, transparent 70%)",
            filter: "blur(105px)",
            opacity: 0.16,
          }}
          animate={auroraAnim2}
          transition={{
            duration: 36,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -14,
          }}
        />
      </div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 via-gray-50/80 to-gray-50/95 dark:from-[#05050A]/90 dark:via-[#05050A]/80 dark:to-[#05050A]/95" />

      <RevealOnScroll>
        <div className="relative z-10 px-6 w-full max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-center"
          >
            Get In Touch
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 dark:bg-[#111111]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-sm"
          >
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-2xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-white/10 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-2xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-white/10 transition-all duration-300"
                  placeholder="you@example.com"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-2xl px-5 py-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-white/10 transition-all duration-300 resize-y min-h-[140px]"
                  placeholder="Your Message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 rounded-2xl text-lg transition-all shadow-lg shadow-cyan-500/50 active:scale-95"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Optional Contact Info */}
          <div className="mt-6 text-center flex items-center gap-9 justify-center text-gray-500 dark:text-gray-400 text-sm">
            <div>
              <a
                href="mailto:sarma.d3e@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 text-2xl"
                aria-label="gmail"
              >
                <BiLogoGmail />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/deepjsr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 text-2xl"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <ToastContainer position="top-center" autoClose={4000} theme="dark" />
    </section>
  );
};
