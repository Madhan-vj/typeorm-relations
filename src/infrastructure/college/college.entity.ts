import { AutoMap } from '@automapper/classes';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from '../student/student.entity';

@Entity()
export class College {
 @AutoMap()
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @AutoMap()
 @Column()
 collegeName!: string;

 @OneToMany(() => Student, (student) => student.college)
 student: Student[];

 public setId(id: string) {
  this.id = id;
 }
}
