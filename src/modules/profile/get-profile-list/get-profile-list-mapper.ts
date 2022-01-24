import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Injectable } from '@nestjs/common';
import { ProfilePagedModel } from 'src/infrastructure/profile/profile-paged-model';
import { Profile } from 'src/infrastructure/profile/profile.entity';
import { GetProfilelistBase } from '../get-profile-base';
import { GetProfileResponse } from './get-profile-list-response';

@Injectable()
export class GetProfileMapper extends AutomapperProfile {
 constructor(@InjectMapper() mapper: Mapper) {
  super(mapper);
 }
 mapProfile() {
  return (mapper: Mapper) => {
   mapper.createMap(Profile, GetProfilelistBase);
   mapper.createMap(ProfilePagedModel, GetProfileResponse);
  };
 }
}
