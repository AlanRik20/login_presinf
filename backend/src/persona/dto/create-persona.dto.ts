import {
  IsInt,
  IsString,
  IsNotEmpty,
  MaxLength,
  IsDateString,
  IsBoolean,
  IsOptional,
  Matches,
} from 'class-validator';

export class CreatePersonaDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  apellido: string;

  @IsDateString()
  fecha_nacimiento: string;

  @IsOptional()
  @Matches(/^\d{7,10}$/, { message: 'El DNI debe tener entre 7 y 10 dígitos' })
  dni: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  domicilio: string;

  @IsInt()
  @IsNotEmpty()
  id_genero: number;

  @IsInt()
  @IsNotEmpty()
  id_localidad: number;

  @IsInt()
  @IsNotEmpty()
  id_provincia: number;

  @IsInt()
  @IsNotEmpty()
  id_persona_tipo: number;
}
