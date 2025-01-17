import { IsNotEmpty, IsString, IsNumber, IsObject, IsOptional } from 'class-validator';

export class UpdateCourseDto {
  @IsNotEmpty()
  @IsObject()
  title: Record<string, string>;

  @IsNotEmpty()
  @IsObject()
  details: Record<string, string>;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  frequency: Record<string, string>;

  @IsNotEmpty()
  dateStart: Date;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}
