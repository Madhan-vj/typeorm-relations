import { AutoMap } from '@automapper/classes';

export class StudentBase {
 @AutoMap()
 firstName!: string;
 @AutoMap()
 lastName!: string;
 @AutoMap()
 rollNumber!: string;
 @AutoMap()
 courseId!: string;
 @AutoMap()
 profileId!: string;
 @AutoMap()
 collegeId!: string;
}
