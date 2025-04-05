import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tool } from './schemas/tool.schema';

@Injectable()
export class ToolsService {
  constructor(
    @InjectModel(Tool.name) private toolModel: Model<Tool>,
  ) {}

  async findAll(): Promise<Tool[]> {
    return this.toolModel.find().exec();
  }

  async findOne(id: string): Promise<Tool> {
    return this.toolModel.findById(id).exec();
  }

  async create(tool: Partial<Tool>): Promise<Tool> {
    const newTool = new this.toolModel(tool);
    return newTool.save();
  }

  async update(id: string, tool: Partial<Tool>): Promise<Tool> {
    return this.toolModel
      .findByIdAndUpdate(id, tool, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Tool> {
    return this.toolModel.findByIdAndDelete(id).exec();
  }
} 