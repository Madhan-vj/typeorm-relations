import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { IProfileService } from 'src/infrastructure/profile/i.profile.service';
import { Profile } from 'src/infrastructure/profile/profile.entity';
import { getProfileMapper } from './get-profile-list-mapper';
import { getProfileResponse } from './get-profile-list-response';

@Controller('Profiles')
export class GetProfileController {
 constructor(
  @Inject('IProfileService') private readonly ProfileService: IProfileService,
  private readonly mapper: getProfileMapper,
 ) { }
 @Get()
 @HttpCode(200)
 async execute(): Promise<Partial<getProfileResponse>> {
  const result = await this.ProfileService.findAll();
  const profileData = this.mapper.request(result);
  console.log(result, 'result');
  return profileData;
 }
}
