'use client'; 
import "./style.css"
import React from 'react'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
<section className="relative flex items-center justify-center h-screen bg-gray-900 text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Hero.webp" 
          alt="Background Demo"
          className="object-cover w-full h-full opacity-50 rotate-12"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-90 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        {/* Heading */}
        <motion.h1 
          className="text-5xl lg:text-7xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Youth Worldwide Foundation
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          className="text-xl lg:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Let&apos;s create the revolution
        </motion.p>
        <div className="flex items-center justify-center w-full max-w-[150vh] px-4">
  <motion.p 
    className="text-xl lg:text-lg mb-8 text-center"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    Throughout the last 9 years, we have had the opportunity to organize numerous events that have helped hundreds of people financially, mentally, and physically. If you want to check out our activities, click the button below.
  </motion.p>
</div>


        {/* CTA Button */}
        <motion.a 
          href="/activity"
          className="inline-block px-8 py-4 bg-cyan-500 text-lg font-semibold rounded-full hover:bg-cyan-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Activity
        </motion.a>
      </div>
      
    </section>
  )
}

export default Hero
