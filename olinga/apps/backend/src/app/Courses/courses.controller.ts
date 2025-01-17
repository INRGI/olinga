import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Req,
  BadRequestException,
  Body,
} from '@nestjs/common';
import { MultipartFile } from '@fastify/multipart';
import { FastifyRequest } from 'fastify';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  async create(@Req() req: FastifyRequest) {
    try {
      const file: MultipartFile = await req.file();

      const fields = file.fields as Record<string, any>;

      const courseData = {
        title: {
          pl: fields['courseData[title][pl]']?.value,
          uk: fields['courseData[title][uk]']?.value,
          ru: fields['courseData[title][ru]']?.value,
        },
        details: {
          pl: fields['courseData[details][pl]']?.value,
          uk: fields['courseData[details][uk]']?.value,
          ru: fields['courseData[details][ru]']?.value,
        },
        frequency: {
          pl: fields['courseData[frequency][pl]']?.value,
          uk: fields['courseData[frequency][uk]']?.value,
          ru: fields['courseData[frequency][ru]']?.value,
        },
        price: fields['courseData[price]']?.value,
        dateStart: fields['courseData[dateStart]']?.value,
      };

      return this.coursesService.createCourse(courseData, file);
    } catch (error) {
      throw new BadRequestException('Something went wrong');
    }
  }

  @Get()
  async findAll() {
    return this.coursesService.getCourses();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.coursesService.getCourseById(id);
  }

  @Put('image/:id')
  async updateWithImage(@Param('id') id: string, @Req() req: FastifyRequest) {
    try {
      const file = await req.file();
      return await this.coursesService.updateCourseImage(id, file);
    } catch (error) {
      throw new BadRequestException('Failed to update massage.');
    }
  }

  @Put(':id')
  async updateWithoutImage(@Param('id') id: string, @Body() courseData: any) {
    return this.coursesService.updateWithoutImage(id, courseData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.coursesService.deleteCourse(id);
  }
}
