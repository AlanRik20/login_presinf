import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoPersonaDto } from './dto/create-tipo_persona.dto';
import { UpdateTipoPersonaDto } from './dto/update-tipo_persona.dto';
import { TipoPersona } from './entities/tipo_persona.entity';

@Injectable()
export class TipoPersonaService {
  constructor(
    @InjectRepository(TipoPersona)
    private tipoPersonaRepository: Repository<TipoPersona>,
  ) {}
  create(createTipoPersonaDto: CreateTipoPersonaDto) {
    return 'This action adds a new tipoPersona';
  }

  findAll(): Promise<TipoPersona[]> {
    return this.tipoPersonaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoPersona`;
  }

  update(id: number, updateTipoPersonaDto: UpdateTipoPersonaDto) {
    return `This action updates a #${id} tipoPersona`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoPersona`;
  }
}
