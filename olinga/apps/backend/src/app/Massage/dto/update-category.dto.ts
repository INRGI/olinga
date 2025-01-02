import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
export class UpdateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  details: string;

  @IsNotEmpty()
  @IsObject()
  translations: Record<string, string>;
}
