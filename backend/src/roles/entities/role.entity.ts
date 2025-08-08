import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Usuario } from '../../user/entities/user.entity';

@Entity('roles')
export class Rol {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Usuario, usuario => usuario.rol)
  usuarios: Usuario[];
}
