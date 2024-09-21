'use client';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white">YouthVoice</h3>
          <p className="text-gray-400">Let's create the revolution</p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="text-xl font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-cyan-500 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-cyan-500 transition-colors">About Us</a></li>
            <li><a href="/events" className="hover:text-cyan-500 transition-colors">Events</a></li>
            <li><a href="/contact" className="hover:text-cyan-500 transition-colors">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="text-xl font-semibold text-white">Programs</h4>
          <ul className="space-y-2">
            <li><a href="/mentorship" className="hover:text-cyan-500 transition-colors">Mentorship</a></li>
            <li><a href="/volunteer" className="hover:text-cyan-500 transition-colors">Volunteer</a></li>
            <li><a href="/education" className="hover:text-cyan-500 transition-colors">Education</a></li>
            <li><a href="/careers" className="hover:text-cyan-500 transition-colors">Careers</a></li>
          </ul>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-xl font-semibold text-white">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/youthworldwidefoundation/?ref=br_rs" className="hover:text-cyan-500 transition-colors">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" className="hover:text-cyan-500 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/youths.voice/" className="hover:text-cyan-500 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://bd.linkedin.com/company/youth-worldwide-foundation" className="hover:text-cyan-500 transition-colors">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} YouthVoice. All rights reserved.
      </div>
    </div>
  </footer>
  )
}

export default Footer
