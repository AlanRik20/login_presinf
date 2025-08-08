import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreasProgramaticasModule } from './areas_programaticas/areas_programaticas.module';
import { AuditoriaModule } from './auditoria/auditoria.module';
import { CentroCapsModule } from './centro_caps/centro_caps.module';
import { DatosAntropometricosModule } from './datos_antropometricos/datos_antropometricos.module';
import { DosisAplicadaModule } from './dosis_aplicada/dosis_aplicada.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { RolesModule } from './roles/roles.module';
import { Rol } from './roles/entities/role.entity';
import { Usuario } from './user/entities/user.entity';
import { AreaProgramatica } from './areas_programaticas/entities/areas_programatica.entity';
import { Auditoria } from './auditoria/entities/auditoria.entity';
import { CentroCaps } from './centro_caps/entities/centro_cap.entity';
import { DatosAntropometricos } from './datos_antropometricos/entities/datos_antropometrico.entity';
import { DosisAplicada } from './dosis_aplicada/entities/dosis_aplicada.entity';
import { Notificacion } from './notificaciones/entities/notificacione.entity';
import { Paciente } from './pacientes/entities/paciente.entity';
import { UserModule } from './user/user.module';
import { PersonaModule } from './persona/persona.module';
import { VacunasModule } from './vacunas/vacunas.module';
import { GenerosModule } from './generos/generos.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { LocalidadesModule } from './localidades/localidades.module';
import { TipoPersonaModule } from './tipo_persona/tipo_persona.module';
import { TipoPersona } from './tipo_persona/entities/tipo_persona.entity';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '123456',
    username: 'postgres',
    database: 'capsDB',
    entities: [Rol, Usuario, AreaProgramatica,Auditoria, CentroCaps, DatosAntropometricos, DosisAplicada, Notificacion, Paciente, TipoPersona],
    synchronize: false,
    autoLoadEntities: true,
  }), AreasProgramaticasModule, AuditoriaModule, CentroCapsModule, DatosAntropometricosModule, DosisAplicadaModule, NotificacionesModule, PacientesModule, RolesModule,UserModule, PersonaModule, VacunasModule, GenerosModule, ProvinciaModule, LocalidadesModule, TipoPersonaModule, AuthModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
