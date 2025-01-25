import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Promotion extends Document {
  @Prop({ type: Map, of: String, required: true, unique: true })
  title: Record<string, string>;

  @Prop({ type: Map, of: String })
  description: Record<string, string>;

  @Prop({ required: true })
  promotion_percent: number;

  @Prop({ required: true })
  promotion_code: string;
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);
