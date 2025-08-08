import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CentroCapsService } from './centro_caps.service';

@Controller('centro-caps')
export class CentroCapsController {
  constructor(private readonly centroCapsService: CentroCapsService) {}

  @Post()
  create(@Body() createCentroCapDto:string ) {
    return this.centroCapsService.create(createCentroCapDto);
  }

  @Get()
  findAll() {
    return this.centroCapsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.centroCapsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCentroCapDto: string) {
    return this.centroCapsService.update(+id, updateCentroCapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.centroCapsService.remove(+id);
  }
}
