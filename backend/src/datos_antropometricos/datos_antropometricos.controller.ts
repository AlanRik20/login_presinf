import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosAntropometricosService } from './datos_antropometricos.service';
import { CreateDatosAntropometricoDto } from './dto/create-datos_antropometrico.dto';
import { UpdateDatosAntropometricoDto } from './dto/update-datos_antropometrico.dto';

@Controller('datos-antropometricos')
export class DatosAntropometricosController {
  constructor(private readonly datosAntropometricosService: DatosAntropometricosService) {}

  @Post()
  create(@Body() createDatosAntropometricoDto: CreateDatosAntropometricoDto) {
    return this.datosAntropometricosService.create(createDatosAntropometricoDto);
  }

  @Get()
  findAll() {
    return this.datosAntropometricosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datosAntropometricosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatosAntropometricoDto: UpdateDatosAntropometricoDto) {
    return this.datosAntropometricosService.update(+id, updateDatosAntropometricoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datosAntropometricosService.remove(+id);
  }
}
