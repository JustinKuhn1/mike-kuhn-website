import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
  <p className="text-xl font-semibold text-center">Mike Kuhn</p>
  <p className="text-gray-400 mt-1 text-center">Professional Homosexual</p>
</div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <p className="text-sm text-gray-400">
              mikekuhn.gay
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-sm text-gray-500">
            Developed by Justin Kuhn
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
