import { IsNotEmpty, IsString, IsNumber, IsObject } from 'class-validator';

export class CreateMassageDto {
  @IsNotEmpty()
  @IsString()
  categoryId: string;

  @IsNotEmpty()
  @IsObject()
  title: Record<string, string>;

  @IsNotEmpty()
  @IsObject()
  description: Record<string, string>;

  @IsNotEmpty()
  @IsObject()
  details1: Record<string, string>;

  @IsNotEmpty()
  @IsObject()
  details2: Record<string, string>;

  @IsNotEmpty()
  @IsObject()
  details3: Record<string, string>;

  @IsNotEmpty()
  @IsObject()
  details4: Record<string, string>;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsObject()
  duration: Record<string, string>;
}
