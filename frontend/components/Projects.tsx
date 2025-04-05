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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project items will go here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="mt-2">Description of Project 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="mt-2">Description of Project 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="mt-2">Description of Project 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 