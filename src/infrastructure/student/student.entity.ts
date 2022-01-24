import { AutoMap } from '@automapper/classes';
import {
 Column,
 Entity,
 JoinColumn,
 ManyToOne,
 OneToOne,
 PrimaryGeneratedColumn,
} from 'typeorm';
import { College } from '../college/college.entity';
import { Profile } from '../profile/profile.entity';

@Entity()
export class Student {
 @AutoMap()
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @AutoMap()
 @Column()
 firstName!: string;

 @AutoMap()
 @Column()
 lastName!: string;

 @AutoMap()
 @Column({ default: true })
 isActive!: boolean;

 @AutoMap()
 @Column()
 rollNumber!: string;

 @AutoMap()
 @Column()
 courseId!: string;

 @OneToOne(() => Profile, (profile) => profile.student)
 @JoinColumn()
 profile: Profile;

 @ManyToOne(() => College, (college) => college.student)
 @JoinColumn()
 college: College;

 @AutoMap()
 @Column()
 collegeId!: string;

 @AutoMap()
 @Column()
 profileId!: string;

 public setId(id: string) {
  this.id = id;
 }
}
