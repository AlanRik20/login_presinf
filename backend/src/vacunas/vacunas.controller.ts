import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VacunasService } from './vacunas.service';

@Controller('vacunas')
export class VacunasController {
  constructor(private readonly vacunasService: VacunasService) {}

  @Get()
  findAll() {
    return this.vacunasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vacunasService.findOne(+id);
  }


  }

