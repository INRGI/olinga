import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Abonement extends Document {

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

  @Prop({ default: '' })
  price: string;

  @Prop({ default: '' })
  duration: string;
}

export const AbonementSchema = SchemaFactory.createForClass(Abonement);
