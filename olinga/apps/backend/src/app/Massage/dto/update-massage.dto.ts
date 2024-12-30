import { IsNotEmpty, IsString, IsNumber, IsObject } from 'class-validator';
export class UpdateMassageDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  duration: number;

  @IsNotEmpty()
  @IsObject()
  translations: Record<string, string>;
}