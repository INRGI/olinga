import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Massage } from '../schemas/massage.schema';
import { CreateMassageDto } from '../dto/create-massage.dto';
import { UpdateMassageDto } from '../dto/update-massage.dto';
import { GoogleDriveService } from '../../Courses/google-drive.service';

@Injectable()
export class MassageService {
  constructor(
    @InjectModel(Massage.name) private massageModel: Model<Massage>,
    private googleDriveService: GoogleDriveService
  ) {}

  async createMassage(
    createMassageDto: CreateMassageDto,
    file?: any
  ): Promise<Massage> {
    const newMassage = new this.massageModel(createMassageDto);

    if (file) {
      const imageUrl = await this.googleDriveService.uploadFile(file);
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

  async getMassagesByCategory(categoryId: string): Promise<Massage[]> {
    return this.massageModel.find({ categoryId: categoryId }).exec();
  }

  async updateMassageImage(id: string, file?: any): Promise<Massage> {
    const imageUrl = await this.googleDriveService.uploadFile(file);

    return this.massageModel
      .findByIdAndUpdate(id, { imageUrl }, { new: true })
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
}
