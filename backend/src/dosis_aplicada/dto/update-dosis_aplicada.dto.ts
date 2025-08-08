import { PartialType } from '@nestjs/mapped-types';
import { CreateDosisAplicadaDto } from './create-dosis_aplicada.dto';

export class UpdateDosisAplicadaDto extends PartialType(CreateDosisAplicadaDto) {}
