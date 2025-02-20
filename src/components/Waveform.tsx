"use client";

import { motion } from "framer-motion";

export default function Waveform() {
  const circles = Array.from({ length: 6 });

  return (
    <div className="relative flex items-center justify-center">
      {circles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border border-blue-500"
          animate={{
            scale: [1, 1.5, 1], // Expand & shrink
            opacity: [0.8, 0.3, 0.8], // Fade in & out
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3, // Staggered animation
          }}
          style={{
            width: `${50 + index * 20}px`,
            height: `${50 + index * 20}px`,
          }}
        />
      ))}
    </div>
  );
}
