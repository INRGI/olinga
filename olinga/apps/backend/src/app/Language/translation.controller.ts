import { Controller, Get, Post, Put, Delete, Body, Query, Param } from '@nestjs/common';
import { TranslationService } from './translation.service';

@Controller('translations')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Get()
  async getTranslations(@Query('language') language: string): Promise<Record<string, string>> {
    return this.translationService.getTranslations(language);
  }

  @Post()
  async createTranslation(
    @Body() createTranslationDto: { key: string; translations: { [language: string]: string } },
  ) {
    const { key, translations } = createTranslationDto;
    return this.translationService.createTranslation(key, translations);
  }

  @Put(':key')
  async updateTranslation(
    @Param('key') key: string,
    @Body() updateTranslationDto: { translations: { [language: string]: string } },
  ) {
    const { translations } = updateTranslationDto;
    return this.translationService.updateTranslation(key, translations);
  }

  @Delete(':key')
  async deleteTranslation(@Param('key') key: string) {
    return this.translationService.deleteTranslation(key);
  }

  @Post('initialize-defaults')
  async initializeDefaultTranslations() {
    return this.translationService.initializeDefaultTranslations();
  }
}
