import { Injectable } from '@nestjs/common';
import { Genero } from './entities/genero.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GenerosService {
  constructor(
    @InjectRepository(Genero)
    private generosRepository: Repository<Genero>,
  ) {}


  async findAll(): Promise<Genero[]> {
    return this.generosRepository.find();
  }

  async findOne(id: number): Promise<Genero | null> {
    return this.generosRepository.findOneBy({ id_genero: id });
  }
}

