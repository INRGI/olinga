import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Translation } from "./entities/Translation.entity";
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
    const defaultTranslations = [
      {
        key: 'header.administrator_role',
        translations: { pl: 'Administrator', uk: 'Адміністратор', ru: 'Администратор' },
      },
      {
        key: 'header.administrator_name1',
        translations: { pl: 'Olexii', uk: 'Олексій', ru: 'Алексей' },
      },
      {
        key: 'header.administrator_name2',
        translations: { pl: 'Inga', uk: 'Інга', ru: 'Инга' },
      },
      {
        key: 'header.menu',
        translations: { pl: 'Menu', uk: 'Меню', ru: 'Меню' },
      },
      {
        key: 'footer.nav_main',
        translations: { pl: 'Główna', uk: 'Головна', ru: 'Главная' },
      },
      {
        key: 'footer.nav_massages',
        translations: { pl: 'Rodzaje masażu', uk: 'Види масажу', ru: 'Виды Массажу' },
      },
      {
        key: 'footer.nav_school',
        translations: { pl: 'Szkoła masażu', uk: 'Школа масажу', ru: 'Школа Массажа'},
      },
      {
        key: 'footer.nav_abonement',
        translations: { pl: 'Abonamenty', uk: 'Абонементи', ru: 'Абонементы' },
      },
      {
        key: 'footer.nav_contacts',
        translations: { pl: 'Kontakt', uk: 'Контакти', ru: 'Контакты' },
      },
      {
        key: 'footer.nav_policy',
        translations: { pl: 'Polityka prywatności', uk: 'Політика Конфіденційності', ru: 'Политика Конфиденциальности' },
      },
      {
        key: 'footer.nav_terms',
        translations: { pl: 'Regulamin i warunki', uk: 'Правила та Умови', ru: 'Правила и Условия' },
      },
      {
        key: 'sidebar.main',
        translations: { pl: 'Główna', uk: 'Головна', ru: 'Главная' },
      },
      {
        key: 'sidebar.massages',
        translations: { pl: 'Rodzaje masażu', uk: 'Види масажу', ru: 'Виды Массажу' },
      },
      {
        key: 'sidebar.school',
        translations: { pl: 'Szkoła masażu', uk: 'Школа масажу', ru: 'Школа Массажа'},
      },
      {
        key: 'sidebar.abonement',
        translations: { pl: 'Abonamenty', uk: 'Абонементи', ru: 'Абонементы' },
      },
      {
        key: 'sidebar.contacts',
        translations: { pl: 'Kontakt', uk: 'Контакти', ru: 'Контакты' },
      },
    ];

    for (const translation of defaultTranslations) {
      await this.updateTranslation(translation.key, translation.translations);
    }
  }
}
