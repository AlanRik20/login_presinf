import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Paciente } from '../../pacientes/entities/paciente.entity';

@Entity('dosis_aplicadas')
export class DosisAplicada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'paciente_id', nullable: true })
  pacienteId: number;

  @ManyToOne(() => Paciente, paciente => paciente.dosisAplicadas)
  @JoinColumn({ name: 'paciente_id' })
  paciente: Paciente;

  @Column({ type: 'date' })
  fecha: string;

  @Column()
  vacuna: string;

  @Column({ nullable: true })
  lote: string;

  @Column({ nullable: true })
  vacunador: string;
}
