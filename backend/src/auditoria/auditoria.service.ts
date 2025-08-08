import { Injectable } from '@nestjs/common';

@Injectable()
export class AuditoriaService {
  create(createAuditoriaDto: string) {
    return 'This action adds a new auditoria';
  }

  findAll() {
    return `This action returns all auditoria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auditoria`;
  }

  update(id: number, updateAuditoriaDto: string) {
    return `This action updates a #${id} auditoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditoria`;
  }
}
