import { PagedResponse } from 'src/common/paged-response';
import { GetCollegelistBase } from '../get-college-base';

export class GetCollegeResponse extends PagedResponse {
  items: GetCollegelistBase[];
}
