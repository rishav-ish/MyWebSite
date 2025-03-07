import { Controller, Get, Post, Body } from '@nestjs/common';
import { TestimonialsService } from './testimonials.service';

@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Get()
  getAllTestimonials() {
    return this.testimonialsService.getAllTestimonials();
  }

  @Post()
  addTestimonial(@Body() testimonial: any) {
    return this.testimonialsService.addTestimonial(testimonial);
  }
} 