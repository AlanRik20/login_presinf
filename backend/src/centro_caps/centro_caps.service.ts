import { Injectable } from '@nestjs/common';

@Injectable()
export class CentroCapsService {
  create(createCentroCapDto: string) {
    return 'This action adds a new centroCap';
  }

  findAll() {
    return `This action returns all centroCaps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} centroCap`;
  }

  update(id: number, updateCentroCapDto: string) {
    return `This action updates a #${id} centroCap`;
  }

  remove(id: number) {
    return `This action removes a #${id} centroCap`;
  }
}
