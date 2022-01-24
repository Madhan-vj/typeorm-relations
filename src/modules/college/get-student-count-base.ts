import { AutoMap } from '@automapper/classes';
import { CollegeBase } from './college-base';

export class GetStudentCountBase extends CollegeBase {
 @AutoMap()
 id: string;
 @AutoMap()
 numberOfStudents: any;
}
