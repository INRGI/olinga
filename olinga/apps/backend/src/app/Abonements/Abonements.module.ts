import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TranslationModule } from '../Language/translation.module';
import { Abonement, AbonementSchema } from './schemas/abonement.schema';
import { AbonementsController } from './Abonements.controller';
import { AbonementsService } from './Abonements.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Abonement.name, schema: AbonementSchema },
    ]),
    TranslationModule,
  ],
  controllers: [AbonementsController],
  providers: [AbonementsService],
})
export class AbonementsModule {}
