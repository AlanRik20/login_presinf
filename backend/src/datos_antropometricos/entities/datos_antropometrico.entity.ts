import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Paciente } from '../../pacientes/entities/paciente.entity';

@Entity('datos_antropometricos')
export class DatosAntropometricos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'paciente_id', nullable: true })
  pacienteId: number;

  @ManyToOne(() => Paciente, paciente => paciente.datosAntropometricos)
  @JoinColumn({ name: 'paciente_id' })
  paciente: Paciente;

  @Column({ type: 'date' })
  fecha: string;

  @Column({ type: 'numeric' })
  peso: number;

  @Column({ type: 'numeric' })
  talla: number;

  @Column({ name: 'perimetro_cefalico', type: 'numeric', nullable: true })
  perimetroCefalico: number;

  @Column({ type: 'numeric', nullable: true })
  imc: number;

  @Column({ nullable: true })
  evaluacion: string;
}
