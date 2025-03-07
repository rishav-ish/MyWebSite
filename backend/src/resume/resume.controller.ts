import { Controller, Get } from '@nestjs/common';
import { ResumeService } from './resume.service';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get()
  getResumeData() {
    return this.resumeService.getResumeData();
  }
} 