import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from '../student/student.entity';

@Entity()
export class Profile {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 gender!: string;

 @Column()
 emailId!: string;

 @Column()
 city!: string;

 @OneToOne(() => Student, (Student) => Student.profile)
 student: Student;
}
