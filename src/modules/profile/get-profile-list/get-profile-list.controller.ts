import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { IProfileService } from 'src/infrastructure/profile/i.profile.service';
import { Profile } from 'src/infrastructure/profile/profile.entity';

@Controller('Profiles')
export class GetProfileController {
 constructor(
  @Inject('IProfileService') private readonly ProfileService: IProfileService,
 ) { }
 @Get()
 @HttpCode(200)
 async execute(): Promise<Profile[]> {
  const result = await this.ProfileService.findAll();
  console.log(result, 'result');
  return result;
 }
}
