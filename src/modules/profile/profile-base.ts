import { AutoMap } from '@automapper/classes';

export class ProfileBase {
 @AutoMap()
 gender!: string;
 @AutoMap()
 emailId!: string;
 @AutoMap()
 city!: string;
}
