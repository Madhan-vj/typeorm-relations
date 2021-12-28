import { Injectable } from '@nestjs/common';
import { Profile } from 'src/infrastructure/profile/profile.entity';
import { getProfileResponse } from './get-profile-list-response';

@Injectable()
export class getProfileMapper {
 public request(request: Profile[]): Partial<getProfileResponse> {
  return { items: request };
 }
}
