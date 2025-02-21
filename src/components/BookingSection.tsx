"use client";

import { motion } from "framer-motion";

export default function BookingSection() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-16">
      {/* Heading */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm text-gray-500 tracking-wide">Get started</p>
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mt-2">
          Ready to step into the future of hiring?
        </h2>
        <p className="mt-2 text-gray-500">
          Never spend weeks trying to find the right candidates again!
        </p>
      </motion.div>

      {/* Booking Embed */}
      <div className="flex justify-center">
        <iframe
          src="https://cal.com/mirai.com/30min"
          className="w-full max-w-4xl h-[600px] border-none"
        />
      </div>
    </section>
  );
}
