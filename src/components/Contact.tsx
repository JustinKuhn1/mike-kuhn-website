import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const contactInfo = [
    {
      id: 'email',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'mike@mikesterman.com',
    },
    {
      id: 'phone',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      content: '3024919492',
    },
    {
      id: 'location',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      content: 'Wilmington, DE',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Reach out to me 💅</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're here for fashion tips or just looking for a man who's passionate about scented candles — I'm always online and emotionally available.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-2xl mx-auto text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-5 md:space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.id}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-100 text-indigo-600">
                    {info.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-base md:text-lg font-medium text-gray-900">{info.title}</h4>
                    <p className="mt-1 text-sm md:text-base text-gray-600">{info.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
