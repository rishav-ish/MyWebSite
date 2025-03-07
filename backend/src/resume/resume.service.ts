import { Injectable } from '@nestjs/common';

@Injectable()
export class ResumeService {
  getResumeData() {
    // Mock data for resume
    return {
      personalInfo: {
        name: 'Backend Developer',
        title: 'Senior Backend Developer',
        email: 'developer@example.com',
        phone: '+1 234 567 890',
        location: 'Remote / New York, USA',
        bio: 'Backend developer with 4 years of experience specializing in NestJS, Node.js, and TypeScript. Passionate about building scalable APIs and microservices. Also learning Data Science and Data Engineering.',
        linkedin: 'linkedin.com/in/yourprofile',
        github: 'github.com/yourusername',
      },
      summary: 'Experienced backend developer with a strong foundation in designing and implementing robust server-side applications. Proficient in NestJS, Node.js, TypeScript, and various databases. Skilled in creating RESTful APIs, microservices, and handling large-scale data processing. Currently expanding knowledge in Data Science and Data Engineering.',
    };
  }
} 