import { AutoMap } from '@automapper/classes';
import { PagedResponse } from 'src/common/paged-response';
import { GetProfilelistBase } from '../get-profile-base';
export class GetProfileResponse extends PagedResponse {
 @AutoMap(() => GetProfilelistBase)
 items: GetProfilelistBase[];
}
