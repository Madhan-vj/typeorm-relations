import { AutoMap } from '@automapper/classes';
import { PagedResponse } from 'src/common/paged-response';
import { CollegeRaw } from './college-raw';

export class CollegeRawPagedModel extends PagedResponse {
 @AutoMap(() => CollegeRaw)
 items: CollegeRaw[];
}
