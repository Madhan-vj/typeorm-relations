import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Injectable } from '@nestjs/common';
import { CollegeRaw } from 'src/infrastructure/college/college-raw';
import { CollegeRawPagedModel } from 'src/infrastructure/college/college-raw-paged-model';
import { GetStudentCountBase } from '../get-student-count-base';
import { GetStudentCountResponse } from './get-student-count-response';

@Injectable()
export class GetStudentCountMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(CollegeRaw, GetStudentCountBase);
      mapper.createMap(CollegeRawPagedModel, GetStudentCountResponse);
    };
  }
}
