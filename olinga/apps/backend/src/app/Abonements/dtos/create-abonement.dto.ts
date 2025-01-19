import { IsNotEmpty, IsString, IsObject, IsOptional } from 'class-validator';

export class CreateAbonementDto {
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

  @IsOptional()
  @IsString()
  price: string;

  @IsOptional()
  @IsString()
  duration: string;
}
