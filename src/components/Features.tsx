"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Interviews",
    description:
      "Automate candidate screening with intelligent voice AI agents.",
    icon: "🎙️",
  },
  {
    title: "Real-Time Candidate Analysis",
    description:
      "Assess technical, soft skills, and situational responses instantly.",
    icon: "📊",
  },
  {
    title: "Faster Hiring Process",
    description:
      "Reduce hiring time with efficient AI-driven candidate evaluations.",
    icon: "⚡",
  },
  {
    title: "Seamless Integration",
    description: "Easily integrate with your existing recruitment workflow.",
    icon: "🔗",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 bg-[#0a0f1e] text-white"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Key Features
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative text-center flex flex-col items-center transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
              {feature.icon}
            </span>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
