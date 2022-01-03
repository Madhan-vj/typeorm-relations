import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database.module';
import { CreateCollegeMapper } from './create-college/create-college-mapper';
import { CreateCollegeController } from './create-college/create-college.controller';
import { DeleteCollegeController } from './Delete-college/Delete-college.controller';
import { getCollegeMapper } from './get-college-list/get-college-list-mapper';
import { GetCollegeController } from './get-college-list/get-college-list.controller';
import { updateCollegeMapper } from './update-college/update-college-mapper';
import { UpdateCollegeController } from './update-college/update-college.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    GetCollegeController,
    CreateCollegeController,
    UpdateCollegeController,
    DeleteCollegeController,
  ],
  providers: [CreateCollegeMapper, getCollegeMapper, updateCollegeMapper],
})
export class CollegeUseCasesModule { }
