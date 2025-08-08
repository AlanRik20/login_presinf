import { Injectable } from '@nestjs/common';

@Injectable()
export class AreasProgramaticasService {
  create(createAreasProgramaticaDto: string) {
    return 'This action adds a new areasProgramatica';
  }

  findAll() {
    return `This action returns all areasProgramaticas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} areasProgramatica`;
  }

  update(id: number, updateAreasProgramaticaDto: string) {
    return `This action updates a #${id} areasProgramatica`;
  }

  remove(id: number) {
    return `This action removes a #${id} areasProgramatica`;
  }
}
