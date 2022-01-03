import { IBaseService } from 'src/common/i.base.service';
import { SortingDirection } from 'src/common/sorting-direction';
import { ProfilePagedModel } from './profile-paged-model';
import { Profile } from './profile.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProfileService extends IBaseService<Profile> {
 getProfilelist(
  pageNumber: number,
  pageSize: number,
  orderBy: SortingDirection,
  orderByPropertyName: string,
 ): Promise<ProfilePagedModel>;
}
