import { Injectable } from '@nestjs/common';

@Injectable()
export class TestimonialsService {
  private testimonials = [
    {
      id: 1,
      name: 'Jane Smith',
      title: 'Tech Lead at InnovateX',
      relationship: 'Manager',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      text: 'An exceptional backend developer who consistently delivers robust, scalable solutions. Their expertise in NestJS and TypeScript is impressive, and they have a knack for designing clean and efficient APIs.',
      date: '2023-04-15',
      linkedin: 'linkedin.com/in/janesmith',
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'CTO at TechFlow',
      relationship: 'Colleague',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      text: 'I had the pleasure of working with this developer on several projects. Their deep understanding of backend systems and ability to optimize performance made a significant impact on our product.',
      date: '2022-11-30',
      linkedin: 'linkedin.com/in/michaelchen',
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      title: 'Senior Data Engineer',
      relationship: 'Mentor',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      text: 'As someone transitioning into data engineering, they showed exceptional aptitude for handling large datasets and building efficient data pipelines. Their backend expertise provided a solid foundation for data engineering concepts.',
      date: '2023-09-05',
      linkedin: 'linkedin.com/in/sarahjohnson',
    }
  ];

  getAllTestimonials() {
    return this.testimonials;
  }

  addTestimonial(testimonial: any) {
    const newTestimonial = {
      id: this.testimonials.length + 1,
      ...testimonial,
      date: new Date().toISOString().split('T')[0],
    };
    this.testimonials.push(newTestimonial);
    return newTestimonial;
  }
} 