import { Injectable } from '@nestjs/common';
import { CreateDosisAplicadaDto } from './dto/create-dosis_aplicada.dto';
import { UpdateDosisAplicadaDto } from './dto/update-dosis_aplicada.dto';

@Injectable()
export class DosisAplicadaService {
  create(createDosisAplicadaDto: CreateDosisAplicadaDto) {
    return 'This action adds a new dosisAplicada';
  }

  findAll() {
    return `This action returns all dosisAplicada`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dosisAplicada`;
  }

  update(id: number, updateDosisAplicadaDto: UpdateDosisAplicadaDto) {
    return `This action updates a #${id} dosisAplicada`;
  }

  remove(id: number) {
    return `This action removes a #${id} dosisAplicada`;
  }
}
