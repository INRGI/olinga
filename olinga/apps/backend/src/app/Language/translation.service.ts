import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Translation } from "./entities/Translation.entity";
import { defaultTranslations } from "./defaultTranslations";
@Injectable()
export class TranslationService {
  constructor(
    @InjectModel('Translation') private translationModel: Model<Translation>,
  ) {}

  async getTranslations(language: string): Promise<Record<string, string>> {
    const translations = await this.translationModel.find().lean().exec();
    return translations.reduce((acc, translation) => {
      acc[translation.key] = translation.translations[language] || '';
      return acc;
    }, {});
  }

  async createTranslation(key: string, translations: { [language: string]: string }) {
    return this.translationModel.create({ key, translations });
  }

  async updateTranslation(key: string, translations: { [language: string]: string }) {
    return this.translationModel.findOneAndUpdate(
      { key },
      { translations },
      { new: true, upsert: true },
    ).lean();
  }

  async deleteTranslation(key: string) {
    return this.translationModel.findOneAndDelete({ key }).lean();
  }

  async initializeDefaultTranslations() {

    for (const translation of defaultTranslations) {
      await this.updateTranslation(translation.key, translation.translations);
    }
  }
}
