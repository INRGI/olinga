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

  @Prop({ type: Map, of: String })
  title: Record<string, string>;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ type: Map, of: String })
  description: Record<string, string>;

  @Prop({ type: Map, of: String })
  details1: Record<string, string>;

  @Prop({ type: Map, of: String })
  details2: Record<string, string>;

  @Prop({ type: Map, of: String })
  details3: Record<string, string>;

  @Prop({ type: Map, of: String })
  details4: Record<string, string>;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  duration: string;
}

export const MassageSchema = SchemaFactory.createForClass(Massage);
