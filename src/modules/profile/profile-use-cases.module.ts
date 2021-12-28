import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database.module';
import { CreateProfileMapper } from './create-profile/create-profile-mapper';
import { CreateProfileController } from './create-profile/create-profile.controller';
import { getProfileMapper } from './get-profile-list/get-profile-list-mapper';
import { GetProfileController } from './get-profile-list/get-profile-list.controller';
import { updateProfileMapper } from './update-profile/update-profile-mapper';
import { UpdateProfileController } from './update-profile/update-profile.controller';

@Module({
 imports: [DatabaseModule],
 controllers: [
  GetProfileController,
  CreateProfileController,
  UpdateProfileController,
 ],
 providers: [CreateProfileMapper, getProfileMapper, updateProfileMapper],
})
export class ProfileUseCasesModule { }
