import { Persona } from 'src/persona/entities/persona.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('tipo_persona')
export class TipoPersona {
  @PrimaryGeneratedColumn()
  id_persona_tipo: number;

  @Column()
  tipo: string;

  @OneToMany(() => Persona, persona => persona.tipo)
  personas: Persona[];
}
