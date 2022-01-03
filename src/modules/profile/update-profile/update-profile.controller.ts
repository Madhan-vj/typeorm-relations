import {
 Body,
 Controller,
 HttpCode,
 HttpException,
 HttpStatus,
 Inject,
 Param,
 Put,
} from '@nestjs/common';
import { IProfileService } from 'src/infrastructure/profile/i.profile.service';
import { updateProfileMapper } from './update-profile-mapper';
import { UpdateProfileRequest } from './update-profile-request';

@Controller('Profiles')
export class UpdateProfileController {
 constructor(
  @Inject('IProfileService') private readonly profileService: IProfileService,
  private readonly mapper: updateProfileMapper,
 ) { }
 @Put(':id')
 @HttpCode(204)
 async updateProfile(
  @Param('id') id: string,
  @Body() request: UpdateProfileRequest,
 ): Promise<void> {
  const profile = await this.profileService.findOne(id);
  if (!profile)
   throw new HttpException('Profile Not Found', HttpStatus.BAD_REQUEST);
  const profileData = this.mapper.request(id, request);
  await this.profileService.updateById(id, profileData);
 }
}
