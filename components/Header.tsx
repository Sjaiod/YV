"use client"
import { motion , AnimatePresence} from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons from react-icons
import { usePathname } from 'next/navigation'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();
  console.log(router);
   

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuPCanimat={
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  }
  const menuVariants = {
    hidden: {
      x: '-100vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        stiffness: 10,
      },
    },
    exit: {
      x: '-100vw',
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const navItems = [
    {label:"Home",Url:"/"},
    {label:'About',Url:"/about"},
    {label:"Events",Url:"/events"},
    {label:"YV",Url:"/youthvoice"},
    {label:"Projects",Url:"/projects"},
    {label:"Contact",Url:"/contact"},]
  return (
    <motion.header
    style={{background:"rgb(17 24 39 / 18%)"}}
    className="fixed w-full  text-white p-5 top-0 z-50"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <motion.div
        className="text-3xl font-bold tracking-wider"
        whileHover={{ scale: 1.1 }}
      >
        <img src="/LOGO.webp" className="cursor-pointer w-[35vh]" />
      </motion.div>

      {/* Menu Icon for mobile */}
      <div className="lg:hidden">
        {isOpen ? (
          <FaTimes size={30} onClick={toggleMenu} />
        ) : (
          <FaBars size={30} onClick={toggleMenu} />
        )}
      </div>

      {/* Navigation Links */}
      <AnimatePresence>
        <motion.nav
          variants={menuPCanimat}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`lg:static max-lg:hidden fixed top-16 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent lg:flex lg:items-center space-y-5 lg:space-y-0 lg:space-x-8 p-5 lg:p-0 z-40 transition-all duration-300`}
        >
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={`${item.Url}`}
              className={`text-xl lg:text-lg transition-colors hover:text-cyan-400 ${
                router === `${item.Url}`
                  ? 'text-cyan-500 font-bold' // Active link style
                  : ''
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="/donate"
            className={`bg-cyan-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors ${
              router === `/donate`
                ? 'bg-cyan-900 font-bold' // Active link style
                : ''
            }`}
            whileHover={{ scale: 1.1 }}
          >
            DONATE
          </motion.a>
        </motion.nav>

        {isOpen && (
          <motion.nav
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`lg:static fixed top-16 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent lg:flex lg:items-center space-y-5 lg:space-y-0 lg:space-x-8 p-5 lg:p-0 z-40 transition-all duration-300`}
          >
            <div className="flex flex-col items-center px-15 gap-14 py-10 h-screen bg-gray-700 w-[98%]">
              {navItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={`${item.Url}`}
                  className={`text-xl lg:text-lg transition-colors hover:text-cyan-400 ${
                    router === `${item.Url}`
                      ? 'text-cyan-500 font-bold' // Active link style
                      : ''
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="/donate"
                className={`bg-cyan-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors ${
                  router === `/donate`
                    ? 'bg-cyan-900 font-bold' // Active link style
                    : ''
                }`}
                whileHover={{ scale: 1.1 }}
              >
                DONATE
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  </motion.header>
  )
}

export default Header