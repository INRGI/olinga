import { Controller, Get, Put, Body } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { UpdatePromotionDto } from './dtos/update-promotion.dto';

@Controller('promotion')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @Get()
  async findOne() {
    return this.promotionService.getPromotion();
  }

  @Put()
  async update(@Body() promotionData: UpdatePromotionDto) {
    return this.promotionService.update(promotionData);
  }
}
