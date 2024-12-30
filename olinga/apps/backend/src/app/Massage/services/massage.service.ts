// src/massage/massage/massage.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Massage } from '../schemas/massage.schema';
import { CreateMassageDto } from '../dto/create-massage.dto';
import { UpdateMassageDto } from '../dto/update-massage.dto';
import { TranslationService } from '../../Language/translation.service';

@Injectable()
export class MassageService {
  constructor(
    @InjectModel(Massage.name) private massageModel: Model<Massage>,
    private translationService: TranslationService
  ) {}

  async createMassage(createMassageDto: CreateMassageDto): Promise<Massage> {
    const newMassage = new this.massageModel(createMassageDto);
    
    if (createMassageDto.translations) {
      await this.translationService.createMassageTranslation(
        newMassage._id.toString(),
        createMassageDto.translations
      );
    }

    return newMassage.save();
  }

  async getMassages(): Promise<Massage[]> {
    return this.massageModel.find().exec();
  }

  async getMassageById(id: string): Promise<Massage> {
    return this.massageModel.findById(id).exec();
  }

  async updateMassage(id: string, updateMassageDto: UpdateMassageDto): Promise<Massage> {
    if (updateMassageDto.translations) {
      await this.translationService.updateTranslation(
        id,
        updateMassageDto.translations
      );
    }

    return this.massageModel.findByIdAndUpdate(id, updateMassageDto, { new: true }).exec();
  }

  async deleteMassage(id: string): Promise<Massage> {
    return this.massageModel.findByIdAndDelete(id).exec();
  }
}
