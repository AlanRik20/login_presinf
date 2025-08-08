import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { Provincia } from 'src/provincia/entities/provincia.entity';
import { Genero } from 'src/generos/entities/genero.entity';
import { Localidad } from 'src/localidades/entities/localidade.entity';
import { TipoPersona } from 'src/tipo_persona/entities/tipo_persona.entity';
@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn()
  id_persona: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  apellido: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date;

  @Column({
    length: 100,
    precision: 10,
    scale: 0,
    unique: true,
    nullable: true,
  })
  dni: string;

  @Column({ length: 100 })
  domicilio: string;

  @Column({ name: 'id_genero', nullable: true })
  generoId: number;

  @ManyToOne(() => Genero, (genero) => genero.personas)
  @JoinColumn({ name: 'id_genero' })
  genero: Genero;

  @Column({ name: 'id_localidad', nullable: true })
  localidadId: number;

  @ManyToOne(() => Localidad, (localidad) => localidad.personas)
  @JoinColumn({ name: 'id_localidad' })
  localidad: Localidad;

  @Column({ name: 'id_provincia', nullable: true })
  provinciaId: number;

  @ManyToOne(() => Provincia, (provincia) => provincia.personas)
  @JoinColumn({ name: 'id_provincia' })
  provincia: Provincia;

  @Column({ name: 'id_persona_tipo', nullable: true })
  tipo_personaId: number;

  @ManyToOne(() => TipoPersona, (tipo) => tipo.personas)
  @JoinColumn({ name: 'id_persona_tipo' })
  tipo: TipoPersona;

}
