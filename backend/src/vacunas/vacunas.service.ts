import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vacuna } from './entities/vacuna.entity';


@Injectable()
export class VacunasService {
  constructor(
    @InjectRepository(Vacuna)
    private vacunaRepository: Repository<Vacuna>,
  ) {}

  create() {
    return 'This action adds a new vacuna';
  }

  async findAll(): Promise<Vacuna[]>  {
    return this.vacunaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} vacuna`;
  }

  update(id: number ) {
    return `This action updates a #${id} vacuna`;
  }

  remove(id: number) {
    return `This action removes a #${id} vacuna`;
  }
}
