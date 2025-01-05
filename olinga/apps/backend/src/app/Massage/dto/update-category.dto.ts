import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
export class UpdateCategoryDto {
  @IsNotEmpty()
  @IsString()
  title: Record<string, string>;

  @IsNotEmpty()
  @IsObject()
  details: Record<string, string>;
  
  @IsString()
  @IsOptional()
  imageUrl?: string;
}
