import { PagedResponse } from 'src/common/paged-response';
import { CollegePagedModel } from 'src/infrastructure/college/college-paged-model';
import { GetCollegelistBase } from '../get-college-base';

export class getCollegeResponse extends PagedResponse {
 items: GetCollegelistBase[];
}
