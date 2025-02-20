"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Waveform from "@/components/Waveform";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center h-screen px-6 md:px-12 bg-gradient-to-b from-black via-gray-900 to-gray-950">
      {/* Animated Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-blue-500">Mirai</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Experience the future of voice AI. Talk, interact, and create like never
        before.
      </motion.p>

      {/* Call to Action */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link href="/signup">
          <motion.button
            className="px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:shadow-blue-400/50 transition-all hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Try Now
          </motion.button>
        </Link>
      </motion.div>
      {/* <div className="absolute top-[50px]">
        <Waveform />
      </div> */}
      {/* Waveform Animation Placeholder (Can be replaced with actual animation) */}
      <motion.div
        className="absolute bottom-10 w-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="h-16 w-48 bg-blue-400/50 rounded-full blur-sm animate-pulse">
          <Waveform />
        </div>
      </motion.div>
    </section>
  );
}
