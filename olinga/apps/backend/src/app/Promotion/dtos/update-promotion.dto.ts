import { IsNotEmpty, IsObject, IsString } from "class-validator";

export class UpdatePromotionDto {
  @IsNotEmpty()
  @IsString()
  title: Record<string, string>;

  @IsNotEmpty()
  @IsObject()
  description: Record<string, string>;

  @IsNotEmpty()
  promotion_percent: number;

  @IsNotEmpty()
  promotion_code: string;
}