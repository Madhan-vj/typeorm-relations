import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { CreateProfileRequest } from './create-profile-request';
import { IProfileService } from 'src/infrastructure/profile/i.profile.service';

@Controller('Profiles')
export class CreateProfileController {
  constructor(
    @Inject('IProfileService') private readonly ProfileService: IProfileService,
  ) { }
  @Post()
  @HttpCode(201)
  async execute(@Body() request: CreateProfileRequest): Promise<any> {
    const result = await this.ProfileService.insert(request);
    return { id: result.id };
  }
}
