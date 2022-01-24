import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Injectable } from '@nestjs/common';
import { CollegePagedModel } from 'src/infrastructure/college/college-paged-model';
import { College } from 'src/infrastructure/college/college.entity';
import { GetCollegelistBase } from '../get-college-base';
import { GetCollegeResponse } from './get-college-list-response';
@Injectable()
export class GetCollegeMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(College, GetCollegelistBase);
      mapper.createMap(CollegePagedModel, GetCollegeResponse);
    };
  }
}
