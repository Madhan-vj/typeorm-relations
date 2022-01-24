import { AutoMap } from '@automapper/classes';

export class CollegeRaw {
 @AutoMap()
 id: string;
 @AutoMap()
 collegeName: string;
 @AutoMap()
 numberOfStudents: number;
}
