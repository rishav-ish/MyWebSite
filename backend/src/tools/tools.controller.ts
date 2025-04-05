import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { Tool } from './schemas/tool.schema';

@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @Get()
  async findAll(): Promise<Tool[]> {
    return this.toolsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Tool> {
    return this.toolsService.findOne(id);
  }

  @Post()
  async create(@Body() tool: Partial<Tool>): Promise<Tool> {
    return this.toolsService.create(tool);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() tool: Partial<Tool>,
  ): Promise<Tool> {
    return this.toolsService.update(id, tool);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Tool> {
    return this.toolsService.delete(id);
  }
} 