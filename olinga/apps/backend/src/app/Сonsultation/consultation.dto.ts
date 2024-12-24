import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class ConsultationDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  date?: string;
}
