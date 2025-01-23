import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Consultation, ConsultationDocument } from './consultation.schema';
import { ConsultationDto } from './consultation.dto';
import { MailService } from '../Mail/mail.service';

@Injectable()
export class ConsultationService {
  constructor(
    @InjectModel(Consultation.name)
    private consultationModel: Model<ConsultationDocument>,
    private readonly mailService: MailService
  ) {}

  async createConsultation(
    consultationDto: ConsultationDto
  ): Promise<Consultation> {
    const consultation = new this.consultationModel(consultationDto);

    const message = `
      New consultation request:
      - Full Name: ${consultationDto.fullName}
      - Email: ${consultationDto.email}
      - Phone: ${consultationDto.phone}
    `;
    this.mailService.sendAdminNotification('New Consultation Request', message);

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
