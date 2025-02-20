"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-[#111] text-white py-14 px-6 md:px-16 overflow-hidden">
      {/* Animated Waveform - Positioned to Top-Left */}
      <motion.div
        className="fixed top-[-80px] left-[-100px] w-[300px] h-[300px] rounded-full border border-blue-500 opacity-40"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{
          boxShadow: "0px 0px 50px rgba(0, 122, 255, 0.5)",
          background:
            "radial-gradient(circle, rgba(0,122,255,0.3), transparent)",
        }}
      />

      {/* Content Wrapper */}
      <div className="flex flex-col items-center relative z-10">
        {/* Mirai Brand Name with Animation */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          style={{ textShadow: "0px 0px 12px rgba(255, 255, 255, 0.3)" }}
        >
          Mirai
        </motion.h1>

        {/* Horizontal Links - Legal & Socials */}
        <div className="flex justify-between items-center w-full max-w-4xl text-gray-400 text-sm mt-4">
          {/* Left - Legal Links */}
          <div className="space-x-8">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </div>

          {/* Right - Social Media Icons */}
          <div className="flex space-x-6 text-xl">
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="hover:text-white transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaXTwitter className="hover:text-white transition" />
            </Link>
            <Link href="https://github.com" target="_blank">
              <FaGithub className="hover:text-white transition" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
