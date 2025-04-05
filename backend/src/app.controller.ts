import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('resume')
  getResume() {
    return {
      personalInfo: {
        name: 'John Doe',
        title: 'Senior Backend Developer',
        email: 'john.doe@example.com',
        phone: '+1 234 567 8900',
        location: 'San Francisco, CA',
        bio: 'Experienced backend developer with a passion for building scalable applications.',
        linkedin: 'https://linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe'
      },
      summary: 'Backend developer with 5+ years of experience in building scalable web applications using Node.js, Python, and various cloud technologies.'
    };
  }

  @Get('skills/categories')
  getSkillsByCategory() {
    return {
      'Backend': [
        { id: 1, name: 'Node.js', category: 'Backend', proficiency: 90 },
        { id: 2, name: 'Python', category: 'Backend', proficiency: 85 },
        { id: 3, name: 'Java', category: 'Backend', proficiency: 80 }
      ],
      'Frontend': [
        { id: 4, name: 'React', category: 'Frontend', proficiency: 75 },
        { id: 5, name: 'TypeScript', category: 'Frontend', proficiency: 80 }
      ],
      'Databases': [
        { id: 6, name: 'MongoDB', category: 'Databases', proficiency: 85 },
        { id: 7, name: 'PostgreSQL', category: 'Databases', proficiency: 80 }
      ]
    };
  }

  @Get('testimonials')
  getTestimonials() {
    return [
      {
        id: 1,
        name: 'Jane Smith',
        title: 'CTO at TechCorp',
        relationship: 'Former Manager',
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        text: 'John is an exceptional developer who consistently delivers high-quality code.',
        date: '2023-12-01',
        linkedin: 'https://linkedin.com/in/janesmith'
      },
      {
        id: 2,
        name: 'Mike Johnson',
        title: 'Lead Developer at StartupX',
        relationship: 'Colleague',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        text: 'Working with John was a great experience. His technical expertise is outstanding.',
        date: '2023-11-15',
        linkedin: 'https://linkedin.com/in/mikejohnson'
      }
    ];
  }
} 