import { Injectable } from '@nestjs/common';
import { Provincia } from './entities/provincia.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ProvinciaService {
  constructor(
    @InjectRepository(Provincia)
    private provinciaRepository: Repository<Provincia>,
  ) {}
  create() {
    return 'This action adds a new provincia';
  }

  async findAll(): Promise<Provincia[]> {
    return this.provinciaRepository.find();
  }

  async findOne(id: number): Promise<Provincia | null> {
    return this.provinciaRepository.findOneBy({ id_provincia: id  });
  }

}
