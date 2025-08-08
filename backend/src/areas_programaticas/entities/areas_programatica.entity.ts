import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Paciente } from '../../pacientes/entities/paciente.entity';

@Entity('areas_programaticas')
export class AreaProgramatica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Paciente, paciente => paciente.area)
  pacientes: Paciente[];
}
