import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MassageService } from '../services/massage.service';
import { CreateMassageDto } from '../dto/create-massage.dto';
import { UpdateMassageDto } from '../dto/update-massage.dto';

@Controller('massages')
export class MassageController {
  constructor(private readonly massageService: MassageService) {}

  @Post()
  async create(@Body() createMassageDto: CreateMassageDto) {
    return this.massageService.createMassage(createMassageDto);
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
  async update(
    @Param('id') id: string,
    @Body() updateMassageDto: UpdateMassageDto,
  ) {
    return this.massageService.updateMassage(id, updateMassageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.massageService.deleteMassage(id);
  }
}
