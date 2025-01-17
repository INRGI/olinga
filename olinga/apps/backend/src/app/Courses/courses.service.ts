import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';
import pump from 'pump';
import { Course } from './schemas/course.schema';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async createCourse(
    createCourseDto: CreateCourseDto,
    file?: any
  ): Promise<Course> {
    const newCourse = new this.courseModel(createCourseDto);

    if (file) {
      const imageUrl = await this.saveImage(file);
      newCourse.imageUrl = imageUrl;
    }

    return newCourse.save();
  }

  async getCourses(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async getCourseById(id: string): Promise<Course> {
    return this.courseModel.findById(id).exec();
  }

  async updateCourseImage(id: string, file?: any): Promise<Course> {
    const existingCourse = await this.courseModel.findById(id).exec();

    if (existingCourse.imageUrl) {
      await this.deleteImage(existingCourse.imageUrl);
    }

    const imageUrl = await this.saveImage(file);

    const updateCourseDto = { imageUrl };

    return this.courseModel
      .findByIdAndUpdate(id, updateCourseDto, { new: true })
      .exec();
  }

  async updateWithoutImage(id: string, updateCourseDto: UpdateCourseDto) {
    return this.courseModel
      .findByIdAndUpdate(id, updateCourseDto, { new: true })
      .exec();
  }

  async deleteCourse(id: string): Promise<Course> {
    return this.courseModel.findByIdAndDelete(id).exec();
  }

  private async saveImage(file: any): Promise<string> {
    const uploadDir = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'apps',
      'frontend',
      'public',
      'uploads'
    );
    await fs.promises.mkdir(uploadDir, { recursive: true });
    const filename = `${Date.now()}-${file.filename}`;
    const filePath = path.join(uploadDir, filename);
    const writeStream = fs.createWriteStream(filePath);
    await pump(file.file, writeStream);
    return `uploads/${filename}`;
  }

  private async deleteImage(imageUrl: string): Promise<void> {
    const filePath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'apps',
      'frontend',
      'public',
      'uploads',
      imageUrl.replace('uploads/', '')
    );
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    } else {
      console.log('File does not exist:', filePath);
    }
  }
}
