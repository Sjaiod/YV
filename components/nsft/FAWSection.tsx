'use client'; 
import React from 'react'
import { motion } from 'framer-motion';


const FAWSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-16">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12">
      {/* Image */}
      <div className="lg:w-1/2">
        <motion.img
          src="/FAW_BASE.jpg" // Replace with actual image
          alt="Fight Against Winter"
          className="rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      {/* Text Content */}
      <div className="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Fight Against Winter
        </motion.h1>
        <motion.p
          className="text-lg mt-4 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          One of our signature events is Fight Against Winter, a fundraiser we've been organizing since 2013. After collecting the funds, we make distribution camps all over Bangladesh, providing blankets and commodities to those in need. Over the years, we've distributed more than 30,000 blankets, helping over 3 lakh people with the help of 40,000 volunteers.
        </motion.p>
        <motion.button
          className="bg-red-600 text-white py-3 px-6 mt-8 rounded-lg shadow hover:bg-red-700 transition-all"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Check OUR LATEST EVENTS
        </motion.button>
      </div>
    </div>
  </section>
  )
}

export default FAWSection


