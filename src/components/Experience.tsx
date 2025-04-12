import { motion } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    id: 1,
    title: 'Creative Director',
    company: 'Design Studio X',
    period: '2020 - Present',
    description: 'Lead creative direction for major brand campaigns, overseeing a team of designers and ensuring consistent brand vision across all projects.',
  },
  {
    id: 2,
    title: 'Senior Designer',
    company: 'Creative Agency Y',
    period: '2017 - 2020',
    description: 'Managed key client relationships and led design projects from concept to completion, resulting in 40% increase in client retention.',
  },
  {
    id: 3,
    title: 'Visual Designer',
    company: 'Studio Z',
    period: '2015 - 2017',
    description: 'Developed visual identities and design systems for various clients across different industries, focusing on maintaining brand consistency.',
  },
  {
    id: 4,
    title: 'Junior Designer',
    company: 'Agency Alpha',
    period: '2013 - 2015',
    description: 'Collaborated with senior designers on various design projects, gaining experience in branding, web design, and visual communication.',
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15 } },
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gray-50"
      id="experience"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A journey of creative exploration and professional growth spanning over a decade in design and creative direction.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={item}
              className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-indigo-600">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-sm font-medium bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full">
                    {exp.period}
                  </span>
                </div>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
