import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tool extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  technologies: string[];

  @Prop()
  imageUrl: string;

  @Prop()
  githubUrl: string;

  @Prop()
  documentationUrl: string;

  @Prop({ required: true })
  category: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ToolSchema = SchemaFactory.createForClass(Tool); 