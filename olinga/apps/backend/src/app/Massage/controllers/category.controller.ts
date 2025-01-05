import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { FastifyRequest } from 'fastify';
import { MultipartFile } from '@fastify/multipart';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Req() req: FastifyRequest) {
    try {
      const file: MultipartFile = await req.file();

      const fields = file.fields as Record<string, any>;

      const categoryData = {
        title: {
          pl: fields['categoryData[title][pl]']?.value,
          uk: fields['categoryData[title][uk]']?.value,
          ru: fields['categoryData[title][ru]']?.value,
        },
        details: {
          pl: fields['categoryData[details][pl]']?.value,
          uk: fields['categoryData[details][uk]']?.value,
          ru: fields['categoryData[details][ru]']?.value,
        },
      };

      return this.categoryService.createCategory(categoryData, file);
    } catch (error) {
      throw new BadRequestException('Something went wrong');
    }
  }

  @Get()
  async findAll() {
    return this.categoryService.getCategories();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.categoryService.getCategoryById(id);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Req() req: any) {
    try {
      const file = await req.file();
      const fields = file?.fields || {};

      const bodyField = fields['body']?.value;
      if (!bodyField) {
        throw new BadRequestException('Missing body field.');
      }
  
      const categoryData = JSON.parse(bodyField);
  
      const fileToSave = file?.fields?.image ? file : undefined;
      return await this.categoryService.updateCategory(id, categoryData, fileToSave);      
    } catch (error) {
      throw new BadRequestException('Failed to update category.');
    }
  }
  
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
