"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left - Logo */}
      <div className="text-2xl font-bold text-white">
        <Link href="/">Mirai</Link>
      </div>

      {/* Navigation Links (Center) */}
      <div className="hidden md:flex space-x-6 text-white">
        {["Home", "Features", "Pricing", "Careers", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-blue-400 transition"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* CTA Button (Right) */}
      <div className="hidden md:block">
        <Link href="/signup">
          <motion.button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            Try Now
          </motion.button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <FaTimes className="text-3xl" />
        ) : (
          <FaBars className="text-3xl" />
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="absolute top-16 left-0 right-0 bg-black/90 p-6 flex flex-col space-y-4 text-center md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {["Agents", "Features", "Pricing", "Careers", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-blue-400 transition"
              >
                {item}
              </Link>
            )
          )}
          <div className="mt-4">
            <Link href="/signup">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Try Now
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
