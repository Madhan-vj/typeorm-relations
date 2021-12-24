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
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 firstName!: string;

 @Column()
 lastName!: string;

 @Column({ default: true })
 isActive!: boolean;

 @Column()
 rollNumber!: string;

 @Column()
 courseId!: string;

 @OneToOne(() => Profile, (profile) => profile.student)
 @JoinColumn()
 profile: Profile;

 @ManyToOne(() => College, (college) => college.student)
 college: College;

 @Column()
 collegeId!: string;

 @Column()
 profileId!: string;
}
