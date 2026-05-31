'use client';

import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      className="min-h-screen py-20 relative overflow-hidden bg-[#05050A]"
    >
      {/* Subtle Aurora Background (consistent with Home) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 30% 40%, #00F5FF 10%, transparent 65%)",
            filter: "blur(110px)",
            opacity: 0.18,
          }}
          animate={{ scale: [1, 1.12, 1], x: [0, 25, -20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 70% 65%, #A855F7 12%, transparent 70%)",
            filter: "blur(105px)",
            opacity: 0.16,
          }}
          animate={{ scale: [1, 0.95, 1.08], y: [0, -30, 25, 0] }}
          transition={{ duration: 36, repeat: Infinity, ease: "easeInOut", delay: -14 }}
        />
      </div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050A]/90 via-[#05050A]/80 to-[#05050A]/95" />

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
            className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                  placeholder="your.email@gmail.com"
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 resize-y min-h-[140px]"
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
          <div className="mt-10 text-center text-gray-400 text-sm">
            Or reach me directly at{" "}
            <a href="mailto:your.email@example.com" className="text-cyan-400 hover:underline">
              your.email@example.com
            </a>
          </div>
        </div>
      </RevealOnScroll>

      <ToastContainer
        position="top-center"
        autoClose={4000}
        theme="dark"
      />
    </section>
  );
};