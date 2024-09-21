'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Custom hook for counting animation
const useCountUp = (end: number, start = 0, duration = 2) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number | null = null;

    const updateCount = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / (duration * 1000), 1);
      const newValue = Math.floor(progress * (end - start) + start);

      setCount(newValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
    
    return () => setCount(start); // Reset on unmount
  }, [end, start, duration]);

  return count;
};

const NSFTSection = () => {
  const [inView, setInView] = useState(false);

  const counters = [
    { label: 'Signature Events', number: 4 },
    { label: 'Plus Activations', number: 250 },
    { label: 'People Supported', number: 100000 },
    { label: 'Lifetime Volunteers', number: 10000 },
  ];

  // Use the custom hook outside the map
  const animatedCounts = counters.map(counter => useCountUp(counter.number, 0, 2));

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('nsft-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="nsft-section"
      className="relative flex  px-2 flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-10 z-0"></div>

      <h2 className="relative z-10 text-4xl md:text-6xl font-bold mb-12 tracking-wider">
        Numbers Speak For Themselves
      </h2>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 px-6 text-center">
        {counters.map((counter, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <motion.h3
              className="text-5xl md:text-7xl font-bold mb-2 cursor-pointer text-cyan-500"
              whileHover={{ scale: 1.05, color: '#00FFAA' }}
            >
              {inView ? animatedCounts[idx] : 0}
            </motion.h3>
            <p className="text-lg uppercase tracking-wide">
              {counter.label.split(' ').map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NSFTSection;
