import { IBaseService } from 'src/common/i.base.service';
import { SortingDirection } from 'src/common/sorting-direction';
import { StudentFilter } from './student-filter';
import { StudentPagedModel } from './student-paged-model';
import { Student } from './student.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IStudentService extends IBaseService<Student> {
 getStudentlist(
  pageNumber: number,
  pageSize: number,
  orderBy: SortingDirection,
  orderByPropertyName: string,
  filter: StudentFilter,
 ): Promise<StudentPagedModel>;
 getStudent(studentid: string): Promise<Student>;
}
