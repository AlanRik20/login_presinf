import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('vacunas')
export class Vacuna {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    vacunas: string;
}
