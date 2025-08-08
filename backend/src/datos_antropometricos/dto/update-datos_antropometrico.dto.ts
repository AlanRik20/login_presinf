import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosAntropometricoDto } from './create-datos_antropometrico.dto';

export class UpdateDatosAntropometricoDto extends PartialType(CreateDatosAntropometricoDto) {}
