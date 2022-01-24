import { AutoMap } from '@automapper/classes';
import { CollegeBase } from './college-base';

export class GetCollegelistBase extends CollegeBase {
 @AutoMap()
 id: string;
}
