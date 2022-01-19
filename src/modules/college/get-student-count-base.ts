import { Student } from 'src/infrastructure/student/student.entity';
import { CollegeBase } from './college-base';

export class GetStudentCountBase extends CollegeBase {
 id: string;
 numberOfStudents: any;
}
