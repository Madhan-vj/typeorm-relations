import { AutoMap } from '@automapper/classes';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from '../student/student.entity';

@Entity()
export class Profile {
 @AutoMap()
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @AutoMap()
 @Column()
 gender!: string;

 @AutoMap()
 @Column()
 emailId!: string;

 @AutoMap()
 @Column()
 city!: string;

 @OneToOne(() => Student, (Student) => Student.profile)
 student: Student;

 public setId(id: string) {
  this.id = id;
 }
}
