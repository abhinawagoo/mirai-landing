"use client";

import { motion } from "framer-motion";
import { FaPlay, FaPause, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const agents = [
  {
    name: "AI Recruiter",
    description: "Conducts intelligent candidate screenings automatically.",
    duration: "0:45",
  },
  {
    name: "Technical Screener",
    description: "Assesses technical skills through structured voice Q&A.",
    duration: "1:15",
  },
  {
    name: "HR Assistant",
    description: "Handles initial HR interactions with candidates.",
    duration: "0:30",
  },
];

export default function RecruitmentAgent() {
  const [playing, setPlaying] = useState(null);

  return (
    <section
      id="recruitment-agents"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#0a0f1e] to-black text-white"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        AI Recruitment Agents
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {agents.map((agent, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center text-center transition-all duration-300 group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Phone Call Icon */}
            <FaPhoneAlt className="text-blue-400 text-5xl mb-4" />

            {/* Agent Name */}
            <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>

            {/* Agent Description */}
            <p className="text-gray-300 mb-4">{agent.description}</p>

            {/* Audio Player UI */}
            <div className="w-full flex items-center justify-between bg-white/10 px-4 py-2 rounded-full border border-white/10">
              <button
                onClick={() => setPlaying(playing === index ? null : index)}
                className="text-white"
              >
                {playing === index ? (
                  <FaPause className="text-lg" />
                ) : (
                  <FaPlay className="text-lg" />
                )}
              </button>
              <div className="text-gray-400 text-sm">{agent.duration}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
