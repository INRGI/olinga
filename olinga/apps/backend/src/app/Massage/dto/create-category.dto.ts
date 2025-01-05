import { IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  title: Record<string, string>;

  @IsNotEmpty()
  @IsObject()
  details: Record<string, string>;
}