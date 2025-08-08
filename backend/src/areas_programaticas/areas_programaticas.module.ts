import { Module } from '@nestjs/common';
import { AreasProgramaticasService } from './areas_programaticas.service';
import { AreasProgramaticasController } from './areas_programaticas.controller';

@Module({
  controllers: [AreasProgramaticasController],
  providers: [AreasProgramaticasService],
})
export class AreasProgramaticasModule {}
