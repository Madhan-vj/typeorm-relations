import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database.module';
import { CreateCollegeMapper } from './create-college/create-college-mapper';
import { CreateCollegeController } from './create-college/create-college.controller';
import { DeleteCollegeController } from './delete-college/delete-college.controller';
import { GetCollegeMapper } from './get-college-list/get-college-list-mapper';
import { GetCollegeController } from './get-college-list/get-college-list.controller';
import { UpdateCollegeMapper } from './update-college/update-college-mapper';
import { UpdateCollegeController } from './update-college/update-college.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    GetCollegeController,
    CreateCollegeController,
    UpdateCollegeController,
    DeleteCollegeController,
  ],
  providers: [CreateCollegeMapper, GetCollegeMapper, UpdateCollegeMapper],
})
export class CollegeUseCasesModule { }
