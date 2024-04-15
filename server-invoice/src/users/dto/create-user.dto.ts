import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly id: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly name: string;
}
