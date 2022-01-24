import { ignore } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Injectable } from '@nestjs/common';
import { Profile } from 'src/infrastructure/profile/profile.entity';
import { UpdateProfileRequest } from './update-profile-request';

@Injectable()
export class UpdateProfileMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper
        .createMap(UpdateProfileRequest, Profile)
        .forMember((destination) => destination.id, ignore());
    };
  }
}
