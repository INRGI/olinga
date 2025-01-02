import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

interface Translations {
  pl: string;
  uk: string;
  ru: string;
}

@Schema()
export class Category extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  details: string;

  @Prop({ type: Map, of: String })
  translations: Record<string, string>;

  @Prop({ required: true })
  imageUrl: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
