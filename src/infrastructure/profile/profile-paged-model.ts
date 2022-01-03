import { PagedResponse } from 'src/common/paged-response';
import { Profile } from './profile.entity';
// import { Student } from './student.entity';

export class ProfilePagedModel extends PagedResponse {
    items: Profile[];
}
