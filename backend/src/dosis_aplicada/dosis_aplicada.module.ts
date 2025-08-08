import { Module } from '@nestjs/common';
import { DosisAplicadaService } from './dosis_aplicada.service';
import { DosisAplicadaController } from './dosis_aplicada.controller';

@Module({
  controllers: [DosisAplicadaController],
  providers: [DosisAplicadaService],
})
export class DosisAplicadaModule {}
