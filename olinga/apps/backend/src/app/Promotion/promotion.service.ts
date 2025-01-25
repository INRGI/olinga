import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Promotion } from './schema/promotion.schema';
import { UpdatePromotionDto } from './dtos/update-promotion.dto';

@Injectable()
export class PromotionService implements OnModuleInit {
  constructor(
    @InjectModel(Promotion.name) private promotionModel: Model<Promotion>
  ) {}

  async onModuleInit() {
    const existingPromotion = await this.promotionModel.findOne().exec();
    if (!existingPromotion) {
      const defaultPromotion = new this.promotionModel({
        title: {
          ru: 'Промоция по умолчанию',
          uk: 'Промоція за замовчуванням',
          pl: 'Domyślna promocja',
        },
        description: {
          ru: 'Описание акции по умолчанию',
          uk: 'Опис акції за замовчуванням',
          pl: 'Domyślny opis promocji',
        },
        promotion_percent: 0,
        promotion_code: 'default',
      });

      await defaultPromotion.save();
    }
  }

  async getPromotion(): Promise<Promotion> {
    return this.promotionModel.findOne().exec();
  }

  async update(updatePromotionDto: UpdatePromotionDto) {
    return this.promotionModel
      .findOneAndUpdate({}, updatePromotionDto, { new: true })
      .exec();
  }
}
