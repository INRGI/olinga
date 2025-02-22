import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Course, CourseSchema } from './schemas/course.schema';
import { GoogleDriveService } from './google-drive.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Course.name, schema: CourseSchema },
    ]),
  ],
  controllers: [CoursesController],
  providers: [CoursesService, GoogleDriveService],
  exports: [GoogleDriveService],
})
export class CoursesModule {}
