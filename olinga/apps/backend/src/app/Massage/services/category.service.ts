import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../schemas/category.schema';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { GoogleDriveService } from '../../Courses/google-drive.service';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
    private googleDriveService: GoogleDriveService
  ) {}

  async createCategory(
    createCategoryDto: CreateCategoryDto,
    file?: any
  ): Promise<Category> {
    const newCategory = new this.categoryModel(createCategoryDto);

    if (file) {
      const imageUrl = await this.googleDriveService.uploadFile(file);
      newCategory.imageUrl = imageUrl;
    }

    return newCategory.save();
  }

  async getCategories(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async getCategoryById(id: string): Promise<Category> {
    return this.categoryModel.findById(id).exec();
  }

  async updateCategoryImage(id: string, file?: any): Promise<Category> {
    const imageUrl = await this.googleDriveService.uploadFile(file);

    return this.categoryModel
      .findByIdAndUpdate(id, { imageUrl }, { new: true })
      .exec();
  }

  async updateWithoutImage(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel
      .findByIdAndUpdate(id, updateCategoryDto, { new: true })
      .exec();
  }

  async deleteCategory(id: string): Promise<Category> {
    return this.categoryModel.findByIdAndDelete(id).exec();
  }
}
