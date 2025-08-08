import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';


export class CreateRoleDto {
    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    nombre: string;

}
