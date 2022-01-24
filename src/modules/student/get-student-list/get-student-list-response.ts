import { AutoMap } from '@automapper/classes';
import { PagedResponse } from 'src/common/paged-response';
import { GetStudentlistBase } from '../get-student-base';
import { StudentListBase } from '../getList-student-base';

export class GetStudentListResponse extends PagedResponse {
 @AutoMap(() => GetStudentlistBase)
 items: GetStudentlistBase[];
}
