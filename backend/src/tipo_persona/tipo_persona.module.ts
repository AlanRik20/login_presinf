import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoPersona } from './entities/tipo_persona.entity';
import { TipoPersonaService } from './tipo_persona.service';
import { TipoPersonaController } from './tipo_persona.controller';

@Module({
   imports: [TypeOrmModule.forFeature([TipoPersona])],
  controllers: [TipoPersonaController],
  providers: [TipoPersonaService],
})
export class TipoPersonaModule {}
