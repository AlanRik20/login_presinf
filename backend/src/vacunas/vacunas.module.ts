import { Module } from '@nestjs/common';
import { VacunasService } from './vacunas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vacuna } from './entities/vacuna.entity';
import { VacunasController } from './vacunas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Vacuna])],
  controllers: [VacunasController],
  providers: [VacunasService],
})
export class VacunasModule {}
