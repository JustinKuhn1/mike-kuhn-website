import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <motion.div
      className={`font-semibold text-2xl md:text-3xl ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.span
        className="font-playfair font-bold"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Mike Kuhn
      </motion.span>
    </motion.div>
  );
};

export default Logo;
