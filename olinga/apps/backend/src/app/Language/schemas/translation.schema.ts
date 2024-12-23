import { Schema, Document } from 'mongoose';

export interface Translation extends Document {
  key: string; 
  translations: {
    [languageCode: string]: string;
  };
}

export const TranslationSchema = new Schema<Translation>({
  key: { type: String, required: true, unique: true },
  translations: {
    type: Map,
    of: String,
    required: true,
  },
});
