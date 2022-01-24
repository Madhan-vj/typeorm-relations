import { AutoMap } from '@automapper/classes';
import { ProfileBase } from './profile-base';

export class GetProfilelistBase extends ProfileBase {
 @AutoMap()
 id: string;
}
