import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database.module';
import { CreateProfileController } from './create-profile/create-profile.controller';
import { GetProfileController } from './get-profile-list/get-profile-list.controller';

@Module({
 imports: [DatabaseModule],
 controllers: [
  GetProfileController,
  CreateProfileController,
 ],
 providers: [],
})
export class ProfileUseCasesModule { }
