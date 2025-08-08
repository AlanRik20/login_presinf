import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>,
  ) { }

  // Obtener todos los roles
  async findAll(): Promise<Rol[]> {
    return this.rolRepository.find();
  }

  // Buscar un rol por ID
  async findById(id: number): Promise<Rol | null> {
    return this.rolRepository.findOne({ where: { id } });
  }
}
