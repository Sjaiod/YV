'use client'; 
import React from 'react'
import { motion } from 'framer-motion';

const Warmth = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: 'url("/FAW00.webp")', backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark transparent overlay */}
      </div>
      <div className="relative container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        <motion.div
          className="max-w-2xl text-white z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">Let’s Share Warmth</h2>
          <p className="mb-8 text-lg">
            Join us in making a difference this winter. Help us distribute blankets and provide warmth to those in need.
          </p>
          <motion.a
            href="/donate"
            className="inline-block bg-cyan-600 text-white text-lg font-semibold py-3 px-8 rounded hover:bg-cyan-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Donate Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Warmth
