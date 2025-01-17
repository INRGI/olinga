import { IsNotEmpty, IsString, IsNumber, IsObject } from 'class-validator';

export class CreateCourseDto {
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
}
