import { Injectable } from '@nestjs/common';
import { Profile } from 'src/infrastructure/profile/profile.entity';
import { CreateProfileRequest } from './create-profile-request';
@Injectable()
export class CreateProfileMapper {
  public request(request: CreateProfileRequest): Partial<Profile> {
    return {
      gender: request.gender,
      emailId: request.emailId,
      city: request.city,
    };
  }
}
