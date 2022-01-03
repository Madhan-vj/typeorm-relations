import { PagedResponse } from 'src/common/paged-response';
import { College } from './college.entity';

export class CollegePagedModel extends PagedResponse {
    items: College[];
}
