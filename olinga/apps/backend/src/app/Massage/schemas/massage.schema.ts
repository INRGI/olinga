import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

interface Translations {
  pl: string;
  uk: string;
  ru: string;
}

@Schema()
export class Massage extends Document {
  @Prop({ required: true })
  categoryId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  duration: number;

  @Prop({ type: Map, of: String })
  translations: Record<string, string>;
}

export const MassageSchema = SchemaFactory.createForClass(Massage);
