import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Req,
  BadRequestException,
  Body,
} from '@nestjs/common';
import { MultipartFile } from '@fastify/multipart';
import { FastifyRequest } from 'fastify';
import { AbonementsService } from './Abonements.service';

@Controller('abonements')
export class AbonementsController {
  constructor(private readonly abonementService: AbonementsService) {}

  @Post()
  async create(@Req() req: FastifyRequest) {
    try {
      const file: MultipartFile = await req.file();

      const fields = file.fields as Record<string, any>;

      const abonementData = {
        title: {
          pl: fields['abonementData[title][pl]']?.value,
          uk: fields['abonementData[title][uk]']?.value,
          ru: fields['abonementData[title][ru]']?.value,
        },
        details1: {
          pl: fields['abonementData[details1][pl]']?.value,
          uk: fields['abonementData[details1][uk]']?.value,
          ru: fields['abonementData[details1][ru]']?.value,
        },
        details2: {
          pl: fields['abonementData[details2][pl]']?.value,
          uk: fields['abonementData[details2][uk]']?.value,
          ru: fields['abonementData[details2][ru]']?.value,
        },
        details3: {
          pl: fields['abonementData[details3][pl]']?.value,
          uk: fields['abonementData[details3][uk]']?.value,
          ru: fields['abonementData[details3][ru]']?.value,
        },
        details4: {
          pl: fields['abonementData[details4][pl]']?.value,
          uk: fields['abonementData[details4][uk]']?.value,
          ru: fields['abonementData[details4][ru]']?.value,
        },
        description: {
          pl: fields['abonementData[description][pl]']?.value,
          uk: fields['abonementData[description][uk]']?.value,
          ru: fields['abonementData[description][ru]']?.value,
        },
        categoryId: fields['abonementData[categoryId]']?.value,
        price: fields['abonementData[price]']?.value,
        duration: fields['abonementData[duration]']?.value,
      };

      return this.abonementService.createAbonement(abonementData, file);
    } catch (error) {
      throw new BadRequestException('Something went wrong');
    }
  }

  @Get()
  async findAll() {
    return this.abonementService.getAbonements();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.abonementService.getAbonementById(id);
  }

  @Put('image/:id')
  async updateWithImage(@Param('id') id: string, @Req() req: FastifyRequest) {
    try {
      const file = await req.file();
      return await this.abonementService.updateAbonementImage(id, file);
    } catch (error) {
      throw new BadRequestException('Failed to update abonement.');
    }
  }

  @Put(':id')
  async updateWithoutImage(
    @Param('id') id: string,
    @Body() abonementData: any
  ) {
    return this.abonementService.updateWithoutImage(id, abonementData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.abonementService.deleteAbonement(id);
  }
}
