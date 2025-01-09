import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { MassageService } from '../services/massage.service';

@Controller('massages')
export class MassageController {
  constructor(private readonly massageService: MassageService) {}

  @Post()
  async create(@Req() req: any) {
    try {
      const file = await req.file();

      const fields = file?.fields || {};

      const bodyField = fields['body']?.value;
      if (!bodyField) {
        throw new BadRequestException('Missing body field.');
      }
  
      const massageData = JSON.parse(bodyField);

      return this.massageService.createMassage(massageData, file);
    } catch (error) {
      throw new BadRequestException('Something went wrong');
    }
  }

  @Get()
  async findAll() {
    return this.massageService.getMassages();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.massageService.getMassageById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Req() req: any) {
    try {
      const file = await req.file();
      const fields = file?.fields || {};

      const bodyField = fields['body']?.value;
      if (!bodyField) {
        throw new BadRequestException('Missing body field.');
      }
  
      const massageData = JSON.parse(bodyField);
  
      const fileToSave = file?.fields?.image ? file : undefined;
      return await this.massageService.updateMassage(id, massageData, fileToSave);      
    } catch (error) {
      throw new BadRequestException('Failed to update massage.');
    }
  }
  
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.massageService.deleteMassage(id);
  }
}
