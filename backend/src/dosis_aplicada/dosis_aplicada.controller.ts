import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DosisAplicadaService } from './dosis_aplicada.service';
import { CreateDosisAplicadaDto } from './dto/create-dosis_aplicada.dto';
import { UpdateDosisAplicadaDto } from './dto/update-dosis_aplicada.dto';

@Controller('dosis-aplicada')
export class DosisAplicadaController {
  constructor(private readonly dosisAplicadaService: DosisAplicadaService) {}

  @Post()
  create(@Body() createDosisAplicadaDto: CreateDosisAplicadaDto) {
    return this.dosisAplicadaService.create(createDosisAplicadaDto);
  }

  @Get()
  findAll() {
    return this.dosisAplicadaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dosisAplicadaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDosisAplicadaDto: UpdateDosisAplicadaDto) {
    return this.dosisAplicadaService.update(+id, updateDosisAplicadaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dosisAplicadaService.remove(+id);
  }
}
