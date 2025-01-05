import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UploadedFile,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { FastifyRequest } from 'fastify';
import { MultipartFile, MultipartValue } from '@fastify/multipart';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Req() req: FastifyRequest) {
    try {
      const file: MultipartFile = await req.file();

      const fields = file.fields as Record<string, any>;

      const categoryData = {
        name: fields['categoryData[name]']?.value,
        details: fields['categoryData[details]']?.value,
        translations: {
          pl: fields['categoryData[translations][pl]']?.value,
          uk: fields['categoryData[translations][uk]']?.value,
          ru: fields['categoryData[translations][ru]']?.value,
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
  
      if (!categoryData.name || !categoryData.details) {
        throw new BadRequestException('Invalid category data: name and details are required.');
      }
  
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
