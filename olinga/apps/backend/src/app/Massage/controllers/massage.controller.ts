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
import { MultipartFile } from '@fastify/multipart';
import { FastifyRequest } from 'fastify';

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
  async update(@Param('id') id: string, @Req() req: FastifyRequest) {
    try {
      const file: MultipartFile = await req.file();

      const fields = file.fields as Record<string, any>;

      const massageData = {
        title: {
          pl: fields['massageData[title][pl]']?.value,
          uk: fields['massageData[title][uk]']?.value,
          ru: fields['massageData[title][ru]']?.value,
        },
        description: {
          pl: fields['massageData[description][pl]']?.value,
          uk: fields['massageData[description][uk]']?.value,
          ru: fields['massageData[description][ru]']?.value,
        },
        details1: {
          pl: fields['massageData[details1][pl]']?.value,
          uk: fields['massageData[details1][uk]']?.value,
          ru: fields['massageData[details1][ru]']?.value,
        },
        details2: {
          pl: fields['massageData[details2][pl]']?.value,
          uk: fields['massageData[details2][uk]']?.value,
          ru: fields['massageData[details2][ru]']?.value,
        },
        details3: {
          pl: fields['massageData[details3][pl]']?.value,
          uk: fields['massageData[details3][uk]']?.value,
          ru: fields['massageData[details3][ru]']?.value,
        },
        details4: {
          pl: fields['massageData[details4][pl]']?.value,
          uk: fields['massageData[details4][uk]']?.value,
          ru: fields['massageData[details4][ru]']?.value,
        },
        price: fields['massageData[price]']?.value,
        duration: fields['massageData[duration]']?.value,
        categoryId: fields['massageData[categoryId]']?.value,
      };

  
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
