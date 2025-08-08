import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoPersonaDto } from './create-tipo_persona.dto';

export class UpdateTipoPersonaDto extends PartialType(CreateTipoPersonaDto) {}
