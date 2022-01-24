import { fromValue, ignore } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Injectable } from '@nestjs/common';
import { Student } from 'src/infrastructure/student/student.entity';
import { StudentBase } from '../student-base';
import { UpdateStudentRequest } from './update-student-request';

@Injectable()
export class updateStudentMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper
        .createMap(UpdateStudentRequest, Student)
        .forMember((destination) => destination.id, ignore())
        .forMember((destination) => destination.isActive, fromValue(true));
    };
  }
}
