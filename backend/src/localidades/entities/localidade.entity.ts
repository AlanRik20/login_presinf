import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Persona } from 'src/persona/entities/persona.entity';
@Entity('localidades')
export class Localidad {

    @PrimaryGeneratedColumn()
    id_localidad: number;
    
    @Column()
    localidad: string;

    @OneToMany(() => Persona, persona => persona.localidadId)
    personas: Persona[];
}
