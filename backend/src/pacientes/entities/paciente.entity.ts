import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { CentroCaps } from '../../centro_caps/entities/centro_cap.entity';
import { AreaProgramatica } from '../../areas_programaticas/entities/areas_programatica.entity';
import { DosisAplicada } from '../../dosis_aplicada/entities/dosis_aplicada.entity';
import { Notificacion } from '../../notificaciones/entities/notificacione.entity';
import { DatosAntropometricos } from '../../datos_antropometricos/entities/datos_antropometrico.entity';

@Entity('pacientes')
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  dni: string;

  @Column({ name: 'fecha_nacimiento', type: 'date' })
  fechaNacimiento: string;

  @Column({ nullable: true })
  domicilio: string;

  @Column({ name: 'contacto_tutor', nullable: true })
  contactoTutor: string;

  @Column({ name: 'caps_id', nullable: true })
  capsId: number;

  @Column({ name: 'area_id', nullable: true })
  areaId: number;

  @ManyToOne(() => CentroCaps, caps => caps.pacientes)
  @JoinColumn({ name: 'caps_id' })
  caps: CentroCaps;

  @ManyToOne(() => AreaProgramatica, area => area.pacientes)
  @JoinColumn({ name: 'area_id' })
  area: AreaProgramatica;

  @OneToMany(() => DosisAplicada, dosis => dosis.paciente)
  dosisAplicadas: DosisAplicada[];

  @OneToMany(() => Notificacion, noti => noti.paciente)
  notificaciones: Notificacion[];

  @OneToMany(() => DatosAntropometricos, datos => datos.paciente)
  datosAntropometricos: DatosAntropometricos[];
}
