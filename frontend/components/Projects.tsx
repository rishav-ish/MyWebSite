import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase } from 'react-icons/fa';

const Projects: React.FC = () => {
  // Filter categories
  const categories = ['All', 'Backend', 'Full-Stack', 'API', 'Data'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Mock data - in a real application, this would come from the API
  const projects = [
    {
      id: 1,
      title: 'Microservices API Gateway',
      description: 'A high-performance API gateway built with NestJS that handles routing, load balancing, and request transformation for a microservices architecture.',
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=API+Gateway',
      technologies: ['NestJS', 'TypeScript', 'Redis', 'Docker', 'Kubernetes'],
      category: 'Backend',
      links: {
        github: 'https://github.com',
        demo: 'https://example.com'
      }
    },
    {
      id: 2,
      title: 'E-commerce Backend Platform',
      description: 'A scalable e-commerce backend with inventory management, payment processing, and order fulfillment capabilities.',
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=E-commerce+Backend',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Stripe API'],
      category: 'Backend',
      links: {
        github: 'https://github.com',
        demo: 'https://example.com'
      }
    },
    {
      id: 3,
      title: 'Real-time Analytics Dashboard',
      description: 'Full-stack application featuring a real-time dashboard for monitoring system metrics and user analytics with interactive visualizations.',
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Analytics+Dashboard',
      technologies: ['Node.js', 'Socket.io', 'React', 'D3.js', 'PostgreSQL'],
      category: 'Full-Stack',
      links: {
        github: 'https://github.com',
        demo: 'https://example.com'
      }
    },
    {
      id: 4,
      title: 'RESTful API for Task Management',
      description: 'A comprehensive RESTful API for task management with authentication, authorization, and advanced filtering capabilities.',
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Task+API',
      technologies: ['Express', 'MongoDB', 'JWT', 'Swagger', 'Jest'],
      category: 'API',
      links: {
        github: 'https://github.com',
        demo: 'https://example.com'
      }
    },
    {
      id: 5,
      title: 'ETL Data Pipeline',
      description: 'An ETL (Extract, Transform, Load) pipeline for processing large datasets and generating business intelligence reports.',
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Data+Pipeline',
      technologies: ['Python', 'Apache Kafka', 'PostgreSQL', 'Docker', 'AWS'],
      category: 'Data',
      links: {
        github: 'https://github.com',
        demo: null
      }
    },
    {
      id: 6,
      title: 'Authentication Microservice',
      description: 'A standalone authentication service supporting OAuth, JWT, and multi-factor authentication with user management.',
      image: 'https://via.placeholder.com/600x400/1e293b/ffffff?text=Auth+Service',
      technologies: ['NestJS', 'TypeScript', 'MongoDB', 'Redis', 'JWT'],
      category: 'Backend',
      links: {
        github: 'https://github.com',
        demo: 'https://example.com'
      }
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-background relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-primary/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/10 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-textColor/70">
            A selection of my recent backend and fullstack projects, showcasing my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-cardBg text-textColor hover:bg-primary/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-cardBg rounded-xl overflow-hidden border border-borderColor hover:border-primary/50 transition-colors"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-textColor/70 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-background text-textColor/70 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-textColor hover:text-primary transition-colors"
                  >
                    <FaGithub className="mr-1" />
                    GitHub
                  </a>
                  
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-textColor hover:text-primary transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 