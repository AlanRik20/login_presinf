import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocalidadesService } from './localidades.service';

@Controller('localidades')
export class LocalidadesController {
  constructor(private readonly localidadesService: LocalidadesService) {}



  @Get()
  findAll() {
    return this.localidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.localidadesService.findOne(+id);
  }
  
}
