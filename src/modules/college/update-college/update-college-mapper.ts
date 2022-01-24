import { ignore } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Injectable } from '@nestjs/common';
import { College } from 'src/infrastructure/college/college.entity';
import { UpdateCollegeRequest } from './update-college-request';

@Injectable()
export class UpdateCollegeMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper
        .createMap(UpdateCollegeRequest, College)
        .forMember((destination) => destination.id, ignore());
    };
  }
}
