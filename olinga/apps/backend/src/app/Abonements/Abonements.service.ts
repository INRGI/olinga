import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Abonement } from './schemas/abonement.schema';
import { CreateAbonementDto } from './dtos/create-abonement.dto';
import { UpdateAbonementDto } from './dtos/update-abonement.dto';
import { GoogleDriveService } from '../Courses/google-drive.service';

@Injectable()
export class AbonementsService {
  constructor(
    @InjectModel(Abonement.name) private abonementModel: Model<Abonement>,
    private googleDriveService: GoogleDriveService
  ) {}

  async createAbonement(
    createAbonementDto: CreateAbonementDto,
    file?: any
  ): Promise<Abonement> {
    const newAbonement = new this.abonementModel(createAbonementDto);

    if (file) {
      const imageUrl = await this.googleDriveService.uploadFile(file);
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
    const imageUrl = await this.googleDriveService.uploadFile(file);

    return this.abonementModel
      .findByIdAndUpdate(id, { imageUrl }, { new: true })
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
}
