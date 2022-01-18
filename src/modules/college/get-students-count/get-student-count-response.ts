import { PagedResponse } from 'src/common/paged-response';
import { GetStudentCountBase } from '../get-student-count-base';

export class GetStudentCountResponse extends PagedResponse {
  items: GetStudentCountBase[];
}
