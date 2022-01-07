import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database.module';
import { CreateProfileMapper } from './create-profile/create-profile-mapper';
import { CreateProfileController } from './create-profile/create-profile.controller';
import { DeleteProfileController } from './delete-profile/delete-profile.controller';
import { GetProfileMapper } from './get-profile-list/get-profile-list-mapper';
import { GetProfileController } from './get-profile-list/get-profile-list.controller';
import { UpdateProfileMapper } from './update-profile/update-profile-mapper';
import { UpdateProfileController } from './update-profile/update-profile.controller';

@Module({
 imports: [DatabaseModule],
 controllers: [
  GetProfileController,
  CreateProfileController,
  UpdateProfileController,
  DeleteProfileController
 ],
 providers: [CreateProfileMapper, GetProfileMapper, UpdateProfileMapper],
})
export class ProfileUseCasesModule { }
