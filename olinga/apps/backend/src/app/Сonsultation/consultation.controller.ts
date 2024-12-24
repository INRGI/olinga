import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { ConsultationDto } from './consultation.dto';

@Controller('consultations')
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) {}

  @Post()
  async createConsultation(@Body() consultationDto: ConsultationDto) {
    return this.consultationService.createConsultation(consultationDto);
  }

  @Get()
  async getAllConsultations() {
    return this.consultationService.getAllConsultations();
  }

  @Patch(':id/status')
  async updateConsultationStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ) {
    return this.consultationService.updateConsultationStatus(id, status);
  }

  @Delete(':id')
  async deleteConsultation(@Param('id') id: string) {
    return this.consultationService.deleteConsultation(id);
  }
}
