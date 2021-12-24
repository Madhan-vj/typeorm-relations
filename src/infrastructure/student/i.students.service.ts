import { IBaseService } from 'src/common/i.base.service';
import { Student } from './student.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IStudentService extends IBaseService<Student> {
 getStudentlist(): Promise<Student[]>;
 getStudent(studentid: string): Promise<Student>;
}
