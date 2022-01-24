import { AutoMap } from '@automapper/classes';
import { StudentBase } from './student-base';

export class GetStudentlistBase extends StudentBase {
 @AutoMap()
 id: string;
}
