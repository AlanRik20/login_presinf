import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Persona } from 'src/persona/entities/persona.entity';

@Entity('provincia')
export class Provincia {

    @PrimaryGeneratedColumn()
    id_provincia: number;
    
    @Column()
    provincia: string;
    
    @OneToMany(() => Persona, persona => persona.provincia)
    personas: Persona[];
  }
