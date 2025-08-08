import { Module } from '@nestjs/common';
import { CentroCapsService } from './centro_caps.service';
import { CentroCapsController } from './centro_caps.controller';

@Module({
  controllers: [CentroCapsController],
  providers: [CentroCapsService],
})
export class CentroCapsModule {}
