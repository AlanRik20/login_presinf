import { Injectable } from '@nestjs/common';
import { CreateDatosAntropometricoDto } from './dto/create-datos_antropometrico.dto';
import { UpdateDatosAntropometricoDto } from './dto/update-datos_antropometrico.dto';

@Injectable()
export class DatosAntropometricosService {
  create(createDatosAntropometricoDto: CreateDatosAntropometricoDto) {
    return 'This action adds a new datosAntropometrico';
  }

  findAll() {
    return `This action returns all datosAntropometricos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datosAntropometrico`;
  }

  update(id: number, updateDatosAntropometricoDto: UpdateDatosAntropometricoDto) {
    return `This action updates a #${id} datosAntropometrico`;
  }

  remove(id: number) {
    return `This action removes a #${id} datosAntropometrico`;
  }
}
