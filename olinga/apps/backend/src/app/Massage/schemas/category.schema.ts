import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

interface Translations {
  pl: string;
  uk: string;
  ru: string;
}

@Schema()
export class Category extends Document {
  @Prop({ type: Map, of: String })
  title: Record<string, string>;

  @Prop({ type: Map, of: String })
  details: Record<string, string>;

  @Prop({type: String})
  imageUrl: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
