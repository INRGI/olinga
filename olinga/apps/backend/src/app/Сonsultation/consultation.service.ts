import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Consultation, ConsultationDocument } from './consultation.schema';
import { ConsultationDto } from './consultation.dto';

@Injectable()
export class ConsultationService {
  constructor(
    @InjectModel(Consultation.name)
    private consultationModel: Model<ConsultationDocument>
  ) {}

  async createConsultation(
    consultationDto: ConsultationDto
  ): Promise<Consultation> {
    const consultation = new this.consultationModel(consultationDto);
    return consultation.save();
  }

  async getAllConsultations(): Promise<Consultation[]> {
    return this.consultationModel.find().exec();
  }

  async updateConsultationStatus(
    id: string,
    status: string
  ): Promise<Consultation> {
    return this.consultationModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
  }

  async deleteConsultation(id: string): Promise<Consultation | null> {
    return this.consultationModel.findByIdAndDelete(id).exec();
  }
}
