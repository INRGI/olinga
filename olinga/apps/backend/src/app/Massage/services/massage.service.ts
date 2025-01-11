// src/massage/massage/massage.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Massage } from '../schemas/massage.schema';
import { CreateMassageDto } from '../dto/create-massage.dto';
import { UpdateMassageDto } from '../dto/update-massage.dto';
import * as fs from 'fs';
import * as path from 'path';
import pump from 'pump';

@Injectable()
export class MassageService {
  constructor(
    @InjectModel(Massage.name) private massageModel: Model<Massage>
  ) {}

  async createMassage(
    createMassageDto: CreateMassageDto,
    file?: any
  ): Promise<Massage> {
    const newMassage = new this.massageModel(createMassageDto);

    if (file) {
      const imageUrl = await this.saveImage(file);
      newMassage.imageUrl = imageUrl;
    }

    return newMassage.save();
  }

  async getMassages(): Promise<Massage[]> {
    return this.massageModel.find().exec();
  }

  async getMassageById(id: string): Promise<Massage> {
    return this.massageModel.findById(id).exec();
  }

  async updateMassageImage(
    id: string,
    file?: any
  ): Promise<Massage> {
      const existingMassage = await this.massageModel.findById(id).exec();
      if (existingMassage.imageUrl) {
        await this.deleteImage(existingMassage.imageUrl);
      }

      const imageUrl = await this.saveImage(file);
      const updateMassageDto = { imageUrl };

    return this.massageModel
      .findByIdAndUpdate(id, updateMassageDto, { new: true })
      .exec();
  }

  async updateWithoutImage(id: string, updateMassageDto: UpdateMassageDto) {
    return this.massageModel
      .findByIdAndUpdate(id, updateMassageDto, { new: true })
      .exec();
  }

  async deleteMassage(id: string): Promise<Massage> {
    return this.massageModel.findByIdAndDelete(id).exec();
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
