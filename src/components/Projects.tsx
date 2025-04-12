import { motion } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Brand Redesign',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
    description: 'Complete brand overhaul for a tech startup, including logo design, color palette, and brand guidelines.',
    url: '/project1'
  },
  {
    id: 2,
    title: 'E-commerce Website',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=800',
    description: 'Responsive e-commerce website with focus on user experience and conversion optimization.',
    url: '/project2'
  },
  {
    id: 3,
    title: 'Mobile App UI',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
    description: 'User interface design for a health tracking mobile application, focusing on accessibility and ease of use.',
    url: '/project3'
  },
  {
    id: 4,
    title: 'Product Campaign',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=800',
    description: 'Integrated marketing campaign for product launch, including digital and print materials.',
    url: '/project4'
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24"
      id="projects"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-2">
            A selection of my most notable design and creative projects spanning various industries and mediums.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-xs sm:text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{project.description}</p>
                <motion.a
                  href={project.url}
                  className="flex items-center text-indigo-600 font-medium group-hover:underline text-sm sm:text-base"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
