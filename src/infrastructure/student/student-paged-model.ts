import { AutoMap } from '@automapper/classes';
import { PagedResponse } from 'src/common/paged-response';
import { Student } from './student.entity';

export class StudentPagedModel extends PagedResponse {
    @AutoMap(() => Student)
    items: Student[];
}
