import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TranslationModule } from '../Language/translation.module';
import { Abonement, AbonementSchema } from './schemas/abonement.schema';
import { AbonementsController } from './Abonements.controller';
import { AbonementsService } from './Abonements.service';
import { GoogleDriveService } from '../Courses/google-drive.service';
import { CoursesModule } from '../Courses/courses.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Abonement.name, schema: AbonementSchema },
    ]),
    TranslationModule,
    CoursesModule,
  ],
  controllers: [AbonementsController],
  providers: [AbonementsService, GoogleDriveService],
})
export class AbonementsModule {}
