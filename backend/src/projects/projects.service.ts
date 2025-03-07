import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  private projects = [
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

  getAllProjects() {
    return this.projects;
  }

  getProjectById(id: number) {
    return this.projects.find(project => project.id === id);
  }

  getProjectsByCategory() {
    const categories = {};
    
    this.projects.forEach(project => {
      if (!categories[project.category]) {
        categories[project.category] = [];
      }
      categories[project.category].push(project);
    });
    
    return categories;
  }
} 