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
} from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Req() req: any) {
    const file = await req.file();
    const body = await req.body;
    const categoryData = JSON.parse(body);

    console.log(categoryData);
    return this.categoryService.createCategory(categoryData, file);
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
  async update(
    @Param('id') id: string,
    @Req() req: any,
    @Body() updateCategoryDto: UpdateCategoryDto
  ) {
    const file = req.file ? await req.file() : null;
    return this.categoryService.updateCategory(id, updateCategoryDto, file);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
