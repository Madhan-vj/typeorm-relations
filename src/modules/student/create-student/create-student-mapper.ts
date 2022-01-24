import { fromValue, ignore } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Injectable } from '@nestjs/common';
import { Student } from 'src/infrastructure/student/student.entity';
import { CreateStudentRequest } from './create-student-request';
@Injectable()
export class CreateStudentMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  mapProfile() {
    return (mapper: Mapper) => {
      mapper
        .createMap(CreateStudentRequest, Student)
        .forMember((destination) => destination.id, ignore())
        .forMember((destination) => destination.isActive, fromValue(true));
    };
  }
}
