import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './schemas/course.schema';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { GoogleDriveService } from './google-drive.service';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<Course>,
    private googleDriveService: GoogleDriveService,
  ) {}

  async createCourse(
    createCourseDto: CreateCourseDto,
    file?: any
  ): Promise<Course> {
    const newCourse = new this.courseModel(createCourseDto);

    if (file) {
      const imageUrl = await this.googleDriveService.uploadFile(file);
      newCourse.imageUrl = imageUrl;
    }

    return newCourse.save();
  }

  async updateCourseImage(id: string, file?: any): Promise<Course> {
    const imageUrl = await this.googleDriveService.uploadFile(file);

    return this.courseModel
      .findByIdAndUpdate(id, { imageUrl }, { new: true })
      .exec();
  }

  async getCourses(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async getCourseById(id: string): Promise<Course> {
    return this.courseModel.findById(id).exec();
  }

  async updateWithoutImage(id: string, updateCourseDto: UpdateCourseDto) {
    return this.courseModel
      .findByIdAndUpdate(id, updateCourseDto, { new: true })
      .exec();
  }

  async deleteCourse(id: string): Promise<Course> {
    return this.courseModel.findByIdAndDelete(id).exec();
  }
}
