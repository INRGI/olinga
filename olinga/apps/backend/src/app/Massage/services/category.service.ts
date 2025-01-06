import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../schemas/category.schema';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { TranslationService } from '../../Language/translation.service';
import * as fs from 'fs';
import * as path from 'path';
import pump from 'pump';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
    private translationService: TranslationService
  ) {}

  async createCategory(
    createCategoryDto: CreateCategoryDto,
    file?: any
  ): Promise<Category> {
    const newCategory = new this.categoryModel(createCategoryDto);

    if (file) {
      const imageUrl = await this.saveImage(file);
      newCategory.imageUrl = imageUrl;
    }

    await this.translationService.createCategoryTranslation(
      `title_${newCategory._id.toString()}`,
      createCategoryDto.title
    );

    await this.translationService.createCategoryTranslation(
      `details_${newCategory._id.toString()}`,
      createCategoryDto.details
    );

    return newCategory.save();
  }

  async getCategories(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async getCategoryById(id: string): Promise<Category> {
    return this.categoryModel.findById(id).exec();
  }

  async updateCategory(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
    file?: any
  ): Promise<Category> {
    if (file) {
      const existingCategory = await this.categoryModel.findById(id).exec();
      if (existingCategory && existingCategory.imageUrl) {
        await this.deleteImage(existingCategory.imageUrl);
      }

      const imageUrl = await this.saveImage(file);
      updateCategoryDto.imageUrl = imageUrl;
    }

      await this.translationService.updateTranslation(
        id,
        updateCategoryDto.details
      );

      await this.translationService.updateTranslation(
        id,
        updateCategoryDto.title
      );

    return this.categoryModel
      .findByIdAndUpdate(id, updateCategoryDto, { new: true })
      .exec();
  }

  async deleteCategory(id: string): Promise<Category> {
    return this.categoryModel.findByIdAndDelete(id).exec();
  }

  private async saveImage(file: any): Promise<string> {
    const uploadDir = path.join(__dirname, '..', '..', '..', 'apps', 'frontend', 'public', 'uploads');
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
    }
  }
}
