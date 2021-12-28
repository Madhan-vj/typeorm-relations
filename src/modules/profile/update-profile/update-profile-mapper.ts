import { Injectable } from '@nestjs/common';
import { ProfileBase } from '../profile-base';

@Injectable()
export class updateProfileMapper {
 public request(id: string, request: ProfileBase): Partial<ProfileBase> {
  return request;
 }
}
