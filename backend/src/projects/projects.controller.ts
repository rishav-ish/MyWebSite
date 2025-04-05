import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './schemas/project.schema';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Project> {
    return this.projectsService.findOne(id);
  }

  @Post()
  async create(@Body() project: Partial<Project>): Promise<Project> {
    return this.projectsService.create(project);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() project: Partial<Project>,
  ): Promise<Project> {
    return this.projectsService.update(id, project);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Project> {
    return this.projectsService.delete(id);
  }
} 