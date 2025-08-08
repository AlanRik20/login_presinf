import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Rol } from '../../roles/entities/role.entity';
import { Auditoria } from '../../auditoria/entities/auditoria.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: 'rol_id', nullable: true })
  rolId: number;

  @ManyToOne(() => Rol, rol => rol.usuarios)
  @JoinColumn({ name: 'rol_id' })
  rol: Rol;

  @Column({ name: 'creado_en', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  creadoEn: Date;

  @OneToMany(() => Auditoria, auditoria => auditoria.usuario)
  auditorias: Auditoria[];
}
