import { ignore } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Injectable } from '@nestjs/common';
import { Profile } from 'src/infrastructure/profile/profile.entity';
import { CreateProfileRequest } from './create-profile-request';

@Injectable()
export class CreateProfileMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper
        .createMap(CreateProfileRequest, Profile)
        .forMember((destination) => destination.id, ignore());
    };
  }
}