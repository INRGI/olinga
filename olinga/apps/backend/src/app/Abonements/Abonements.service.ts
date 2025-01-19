import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';
import pump from 'pump';
import { Abonement } from './schemas/abonement.schema';
import { CreateAbonementDto } from './dtos/create-abonement.dto';
import { UpdateAbonementDto } from './dtos/update-abonement.dto';

@Injectable()
export class AbonementsService {
  constructor(
    @InjectModel(Abonement.name) private abonementModel: Model<Abonement>
  ) {}

  async createAbonement(
    createAbonementDto: CreateAbonementDto,
    file?: any
  ): Promise<Abonement> {
    const newAbonement = new this.abonementModel(createAbonementDto);

    if (file) {
      const imageUrl = await this.saveImage(file);
      newAbonement.imageUrl = imageUrl;
    }

    return newAbonement.save();
  }

  async getAbonements(): Promise<Abonement[]> {
    return this.abonementModel.find().exec();
  }

  async getAbonementById(id: string): Promise<Abonement> {
    return this.abonementModel.findById(id).exec();
  }

  async updateAbonementImage(id: string, file?: any): Promise<Abonement> {
    const existingAbonemnt = await this.abonementModel.findById(id).exec();
    if (existingAbonemnt.imageUrl) {
      await this.deleteImage(existingAbonemnt.imageUrl);
    }

    const imageUrl = await this.saveImage(file);
    const updateAbonemntDto = { imageUrl };

    return this.abonementModel
      .findByIdAndUpdate(id, updateAbonemntDto, { new: true })
      .exec();
  }

  async updateWithoutImage(id: string, updateAbonementDto: UpdateAbonementDto) {
    return this.abonementModel
      .findByIdAndUpdate(id, updateAbonementDto, { new: true })
      .exec();
  }

  async deleteAbonement(id: string): Promise<Abonement> {
    return this.abonementModel.findByIdAndDelete(id).exec();
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
