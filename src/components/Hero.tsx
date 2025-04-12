import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (textRef.current) {
      // Using fromTo to explicitly set starting and ending values
      tl.fromTo(
        textRef.current.querySelectorAll('.gsap-text'),
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 1, 
          ease: 'power4.out',
        }
      );
    }

    // Empty cleanup function to avoid killing the animation
    return () => {};
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 overflow-hidden"
      id="about"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50" />
        <motion.div
          className="absolute -right-48 md:-right-24 top-48 w-72 md:w-96 h-72 md:h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0]
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute -left-20 md:left-20 bottom-20 w-64 md:w-72 h-64 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 12,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <div className="max-w-3xl mx-auto" ref={textRef}>
          {/* Using only GSAP for text animations - removed Framer Motion animation props */}
          <p className="gsap-text text-indigo-600 font-medium mb-3 md:mb-4">
            Hayyyyyy, I'm
          </p>
          <h1 className="gsap-text text-4xl md:text-7xl font-bold mb-4 md:mb-6">
            Mike Kuhn
          </h1>
          <p className="gsap-text text-lg md:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
            
          </p>
          <div className="gsap-text flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
            </motion.a>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-1 h-2 bg-gray-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;