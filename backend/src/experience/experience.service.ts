import { Injectable } from '@nestjs/common';

@Injectable()
export class ExperienceService {
  private experiences = [
    {
      id: 1,
      title: 'Senior Backend Developer',
      company: 'Tech Innovations Inc.',
      location: 'New York, NY (Remote)',
      period: 'Jan 2022 - Present',
      description: 'Lead backend developer responsible for designing and implementing scalable microservices using NestJS and TypeScript. Managed a team of 3 developers and improved API response times by 40%.',
      technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      achievements: [
        'Redesigned authentication system improving security and reducing login times by 30%',
        'Implemented CI/CD pipeline reducing deployment time from hours to minutes',
        'Created comprehensive API documentation increasing developer onboarding efficiency'
      ]
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'DataFlow Systems',
      location: 'Chicago, IL (Hybrid)',
      period: 'Mar 2020 - Dec 2021',
      description: 'Developed and maintained RESTful APIs for data processing applications using Node.js and Express. Worked closely with frontend team to ensure seamless integration.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'GraphQL', 'Docker'],
      achievements: [
        'Developed a real-time data processing system handling over 10,000 requests per minute',
        'Reduced database query times by 50% through optimization and indexing',
        'Implemented GraphQL API reducing frontend-backend data transfer by 60%'
      ]
    },
    {
      id: 3,
      title: 'Junior Software Developer',
      company: 'WebSolution Partners',
      location: 'Boston, MA (On-site)',
      period: 'Jun 2019 - Feb 2020',
      description: 'Full-stack developer with focus on backend systems. Worked on a team developing web applications for enterprise clients.',
      technologies: ['JavaScript', 'Node.js', 'MySQL', 'React', 'Git'],
      achievements: [
        'Contributed to the development of an internal tool that increased team productivity by 25%',
        'Implemented automated testing increasing code coverage from 40% to 85%',
        'Assisted in migrating legacy systems to modern architecture'
      ]
    }
  ];

  getAllExperiences() {
    return this.experiences;
  }
} 