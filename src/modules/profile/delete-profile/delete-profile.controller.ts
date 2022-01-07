import { Controller, Delete, HttpCode, Inject, Param } from '@nestjs/common';
import { IProfileService } from 'src/infrastructure/profile/i.profile.service';

@Controller('Profiles')
export class DeleteProfileController {
 constructor(
  @Inject('IProfileService') private readonly profileService: IProfileService,
 ) { }

 @Delete(':id')
 @HttpCode(204)
 async execute(@Param('id') id: string): Promise<void> {
  await this.profileService.deleteById(id);
 }
}
