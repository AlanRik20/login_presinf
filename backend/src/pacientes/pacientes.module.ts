import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacientesController } from './pacientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([])], 
  controllers: [PacientesController],
  providers: [PacientesService],
})
export class PacientesModule {}
