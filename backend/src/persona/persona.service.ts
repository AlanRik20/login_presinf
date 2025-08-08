import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonaService {
    constructor(
      @InjectRepository(Persona)
      private personaRepository: Repository<Persona>,
    ) {}
  
  create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    const persona: Persona = new Persona();
    persona.nombre = createPersonaDto.nombre;
    persona.apellido = createPersonaDto.apellido;
    persona.fecha_nacimiento = new Date(createPersonaDto.fecha_nacimiento);
    persona.dni = createPersonaDto.dni;
    persona.domicilio = createPersonaDto.domicilio;
    persona.generoId = createPersonaDto.id_genero;
    persona.localidadId = createPersonaDto.id_localidad;
    persona.provinciaId = createPersonaDto.id_provincia;

    return this.personaRepository.save(persona);
  }

  findAll(): Promise<Persona[]> {
    return this.personaRepository.find();
  }

  findOne(id: number) {
    return 'This action returns a #${id} persona';
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    return this.personaRepository.save({ ...updatePersonaDto, id_persona: id });
  }

  remove(id: number): Promise<void> {
    return this.personaRepository.delete(id).then(() => {});
  }

    async findAllWithRelations() {
    return await this.personaRepository
      .createQueryBuilder('p')
      .leftJoinAndSelect('p.genero', 'g')
      .leftJoinAndSelect('p.localidad', 'l')
      .leftJoinAndSelect('p.provincia', 'pr')
      .select([
        'p.id_persona',
        'p.nombre',
        'p.apellido',
        'p.dni',
        'p.fecha_nacimiento',
        'g.genero',
        'l.localidad',
        'pr.provincia'
      ])
      .getRawMany();
  }
}
