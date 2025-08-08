import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  isString,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;
export class CreateUserDto {
  @IsString()
  @MinLength(2, {
    message: 'El nombre tiene que tener 2 carecteres como minimo.',
  })
  @IsNotEmpty({ message: 'El nombre no puede estar vacio.' })
  nombre: string;

  email: string;

  @IsInt()
  @IsNotEmpty()
  rol_id: number;

  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `La contraseña debe tener entre 8 y 20 caracteres, 
    al menos una letra mayúscula, una letra minúscula, 
    un número y un carácter especial`,
  })
  password: string;
}
