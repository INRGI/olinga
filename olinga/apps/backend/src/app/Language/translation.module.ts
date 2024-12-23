import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TranslationService } from './translation.service';
import { TranslationController } from './translation.controller';
import { TranslationSchema } from './schemas/translation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Translation', schema: TranslationSchema }]),
  ],
  providers: [TranslationService],
  controllers: [TranslationController],
})
export class TranslationModule implements OnModuleInit {
  constructor(private readonly translationService: TranslationService) {}

  async onModuleInit() {
    await this.translationService.initializeDefaultTranslations();
  }
}
