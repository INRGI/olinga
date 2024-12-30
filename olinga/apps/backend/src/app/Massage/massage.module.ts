import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Massage, MassageSchema } from './schemas/massage.schema';
import { MassageController } from './controllers/massage.controller';
import { MassageService } from './services/massage.service';
import { Category, CategorySchema } from './schemas/category.schema';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { TranslationModule } from '../Language/translation.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Massage.name, schema: MassageSchema },
      { name: Category.name, schema: CategorySchema },
    ]),
    TranslationModule,
  ],
  controllers: [MassageController, CategoryController],
  providers: [MassageService, CategoryService],
})
export class MassageModule {}
