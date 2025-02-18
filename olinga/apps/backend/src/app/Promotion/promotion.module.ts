import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Promotion, PromotionSchema } from './schema/promotion.schema';
import { PromotionController } from './promotion.controller';
import { PromotionService } from './promotion.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Promotion.name, schema: PromotionSchema },
    ]),
  ],
  controllers: [PromotionController],
  providers: [PromotionService],
})
export class PromotionModule {}
