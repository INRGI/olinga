import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Course extends Document {
  @Prop({ type: Map, of: String })
  title: Record<string, string>;

  @Prop({ type: Map, of: String })
  details: Record<string, string>;

  @Prop({type: String})
  imageUrl: string;

  @Prop({ required: true })
  price: string;

  @Prop({ type: Map, of: String })
  frequency: Record<string, string>;

  @Prop({ required: true })
  dateStart: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
