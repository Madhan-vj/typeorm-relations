import { ignore } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Injectable } from '@nestjs/common';
import { College } from 'src/infrastructure/college/college.entity';
import { CreateCollegeRequest } from './create-college-request';

@Injectable()
export class CreateCollegeMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  mapProfile() {
    return (mapper: Mapper) => {
      mapper
        .createMap(CreateCollegeRequest, College)
        .forMember((destination) => destination.id, ignore())
    };
  }
}
