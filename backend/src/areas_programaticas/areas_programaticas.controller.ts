import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AreasProgramaticasService } from './areas_programaticas.service';


@Controller('areas-programaticas')
export class AreasProgramaticasController {
  constructor(private readonly areasProgramaticasService: AreasProgramaticasService) {}

  @Post()
  create(@Body() createAreasProgramaticaDto:string ) {
    return this.areasProgramaticasService.create(createAreasProgramaticaDto);
  }

  @Get()
  findAll() {
    return this.areasProgramaticasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.areasProgramaticasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAreasProgramaticaDto: string) {
    return this.areasProgramaticasService.update(+id, updateAreasProgramaticaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.areasProgramaticasService.remove(+id);
  }
}
