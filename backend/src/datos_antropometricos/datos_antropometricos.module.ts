import { Module } from '@nestjs/common';
import { DatosAntropometricosService } from './datos_antropometricos.service';
import { DatosAntropometricosController } from './datos_antropometricos.controller';

@Module({
  controllers: [DatosAntropometricosController],
  providers: [DatosAntropometricosService],
})
export class DatosAntropometricosModule {}
