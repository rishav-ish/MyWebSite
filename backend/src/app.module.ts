import { Module } from '@nestjs/common';
import { ResumeModule } from './resume/resume.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { SkillsModule } from './skills/skills.module';
import { ProjectsModule } from './projects/projects.module';
import { ExperienceModule } from './experience/experience.module';

@Module({
  imports: [
    ResumeModule,
    TestimonialsModule,
    SkillsModule,
    ProjectsModule,
    ExperienceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {} 