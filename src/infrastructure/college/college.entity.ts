import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from '../student/student.entity';

@Entity()
export class College {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 collegeName!: string;

 @OneToMany(() => Student, (student) => student.college)
 student: Student[];
 numberOfStudents: number;
}
