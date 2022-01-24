import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Injectable } from '@nestjs/common';
import { StudentPagedModel } from 'src/infrastructure/student/student-paged-model';
import { Student } from 'src/infrastructure/student/student.entity';
import { GetStudentlistBase } from '../get-student-base';
import { GetStudentListResponse } from './get-student-list-response';

@Injectable()
export class GetStudentMapper extends AutomapperProfile {
 constructor(@InjectMapper() mapper: Mapper) {
  super(mapper);
 }
 mapProfile() {
  return (mapper: Mapper) => {
   mapper.createMap(Student, GetStudentlistBase);
   mapper.createMap(StudentPagedModel, GetStudentListResponse);
  };
 }
}
