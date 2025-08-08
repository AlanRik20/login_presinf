import { Injectable } from '@nestjs/common';
import { Localidad } from './entities/localidade.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LocalidadesService {
  constructor(
    @InjectRepository(Localidad)
    private localidadesRepository: Repository<Localidad>,
  ) {}

  async findAll(): Promise<Localidad[]> {
    return this.localidadesRepository.find();
  }

  async findOne(id: number): Promise<Localidad | null> {
    return this.localidadesRepository.findOneBy({ id_localidad: id });
  }
}


