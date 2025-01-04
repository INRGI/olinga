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

  @Put(':id')
  async update(@Param('id') id: string, @Req() req: FastifyRequest) {
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

      console.log('Update category data:', categoryData);

      return this.categoryService.updateCategory(id, categoryData, file);
    } catch (error) {
      console.error('Error updating category:', error);
      throw new BadRequestException(
        'Something went wrong while updating the category'
      );
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

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
