import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Persona } from 'src/persona/entities/persona.entity';
@Entity('generos')
export class Genero {

    @PrimaryGeneratedColumn()
    id_genero: number;

    @Column()
    genero: string;

    @OneToMany(() => Persona, persona => persona.generoId)
    personas: Persona[];
}
