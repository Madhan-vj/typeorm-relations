import { AutoMap } from '@automapper/classes';
import { PagedResponse } from 'src/common/paged-response';
import { College } from './college.entity';

export class CollegePagedModel extends PagedResponse {
    @AutoMap(() => College)
    items: College[];
}
