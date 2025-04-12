import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Logo from './Logo';

const navItems = [
  { title: 'Home', href: '#about' },
  { title: 'About Me', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <motion.header
      className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/80 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Logo />

        <motion.nav
          variants={container}
          initial="hidden"
          animate="show"
          className="hidden md:flex items-center space-x-8"
        >
          {navItems.map((navItem) => (
            <motion.a
              key={navItem.title}
              href={navItem.href}
              variants={itemVariant}
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-gray-700 hover:text-gray-900 font-medium relative group"
            >
              {navItem.title}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.a>
          ))}
        </motion.nav>

        <motion.div
          className="md:hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            className="p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="container mx-auto px-4 py-4 flex flex-col space-y-4"
            >
              {navItems.map((navItem) => (
                <motion.a
                  key={navItem.title}
                  href={navItem.href}
                  variants={itemVariant}
                  whileHover={{ x: 5 }}
                  onClick={closeMenu}
                  className="text-gray-700 hover:text-gray-900 font-medium py-2 border-b border-gray-100 flex justify-between items-center"
                >
                  {navItem.title}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
