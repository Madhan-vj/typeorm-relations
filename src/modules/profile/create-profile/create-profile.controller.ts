import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { CreateProfileRequest } from './create-profile-request';
import { IProfileService } from 'src/infrastructure/profile/i.profile.service';
import { CreateProfileMapper } from './create-profile-mapper';
import { CreateProfileResponse } from './create-profile-response';
@Controller('Profiles')
export class CreateProfileController {
  constructor(
    @Inject('IProfileService') private readonly profileService: IProfileService,
    private readonly mapper: CreateProfileMapper,
  ) { }
  @Post()
  @HttpCode(201)
  async execute(
    @Body() request: CreateProfileRequest,
  ): Promise<CreateProfileResponse> {
    const profileData = this.mapper.request(request);
    const result = await this.profileService.insert(profileData);
    return { id: result.id };
  }
}
