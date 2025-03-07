import { Injectable } from '@nestjs/common';

@Injectable()
export class SkillsService {
  private skills = [
    { id: 1, name: 'Node.js', category: 'Backend', proficiency: 95 },
    { id: 2, name: 'TypeScript', category: 'Languages', proficiency: 90 },
    { id: 3, name: 'NestJS', category: 'Backend', proficiency: 92 },
    { id: 4, name: 'Express.js', category: 'Backend', proficiency: 95 },
    { id: 5, name: 'PostgreSQL', category: 'Databases', proficiency: 85 },
    { id: 6, name: 'MongoDB', category: 'Databases', proficiency: 88 },
    { id: 7, name: 'Redis', category: 'Databases', proficiency: 80 },
    { id: 8, name: 'Docker', category: 'DevOps', proficiency: 85 },
    { id: 9, name: 'Kubernetes', category: 'DevOps', proficiency: 75 },
    { id: 10, name: 'AWS', category: 'Cloud', proficiency: 82 },
    { id: 11, name: 'RESTful APIs', category: 'Backend', proficiency: 95 },
    { id: 12, name: 'GraphQL', category: 'Backend', proficiency: 85 },
    { id: 13, name: 'Microservices', category: 'Architecture', proficiency: 88 },
    { id: 14, name: 'JavaScript', category: 'Languages', proficiency: 95 },
    { id: 15, name: 'Git', category: 'DevOps', proficiency: 90 },
    { id: 16, name: 'Python', category: 'Languages', proficiency: 75 },
    { id: 17, name: 'React', category: 'Frontend', proficiency: 70 },
    { id: 18, name: 'SQL', category: 'Databases', proficiency: 90 },
    { id: 19, name: 'NoSQL', category: 'Databases', proficiency: 85 },
    { id: 20, name: 'CI/CD', category: 'DevOps', proficiency: 80 },
    { id: 21, name: 'Pandas', category: 'Data Science', proficiency: 65 },
    { id: 22, name: 'NumPy', category: 'Data Science', proficiency: 60 },
    { id: 23, name: 'Apache Kafka', category: 'Data Engineering', proficiency: 70 },
    { id: 24, name: 'Apache Spark', category: 'Data Engineering', proficiency: 55 },
    { id: 25, name: 'ETL Processes', category: 'Data Engineering', proficiency: 75 },
  ];

  getAllSkills() {
    return this.skills;
  }

  getSkillsByCategory() {
    const categories = {};
    
    this.skills.forEach(skill => {
      if (!categories[skill.category]) {
        categories[skill.category] = [];
      }
      categories[skill.category].push(skill);
    });
    
    return categories;
  }
} 