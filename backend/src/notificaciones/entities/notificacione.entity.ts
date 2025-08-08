import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Paciente } from '../../pacientes/entities/paciente.entity';

@Entity('notificaciones')
export class Notificacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'paciente_id', nullable: true })
  pacienteId: number;

  @ManyToOne(() => Paciente, paciente => paciente.notificaciones)
  @JoinColumn({ name: 'paciente_id' })
  paciente: Paciente;

  @Column()
  tipo: string;

  @Column()
  mensaje: string;

  @Column({ default: false })
  leida: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}
