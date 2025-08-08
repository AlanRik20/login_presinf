import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Paciente } from '../../pacientes/entities/paciente.entity';

@Entity('centro_caps')
export class CentroCaps {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @OneToMany(() => Paciente, paciente => paciente.caps)
  pacientes: Paciente[];
}
