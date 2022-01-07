import { PagedResponse } from 'src/common/paged-response';
import { StudentListBase } from '../getList-student-base';

export class GetStudentListResponse extends PagedResponse {
 items: StudentListBase[];
}
