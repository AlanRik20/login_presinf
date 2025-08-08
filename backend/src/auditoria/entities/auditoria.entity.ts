import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../user/entities/user.entity';

@Entity('auditoria')
export class Auditoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'usuario_id', nullable: true })
  usuarioId: number;

  @ManyToOne(() => Usuario, usuario => usuario.auditorias)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column()
  accion: string;

  @Column({ name: 'tabla_afectada' })
  tablaAfectada: string;

  @Column({ name: 'registro_id', nullable: true })
  registroId: number;

  @Column({ type: 'jsonb', nullable: true })
  datos: any;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}
