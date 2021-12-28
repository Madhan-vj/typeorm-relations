import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database.module';
import { CreateCollegeMapper } from './create-college/create-college-mapper';
import { CreateCollegeController } from './create-college/create-college.controller';
import { getCollegeMapper } from './get-college-list/get-college-list-mapper';
import { GetCollegeController } from './get-college-list/get-college-list.controller';

@Module({
 imports: [DatabaseModule],
 controllers: [GetCollegeController, CreateCollegeController],
 providers: [CreateCollegeMapper, getCollegeMapper],
})
export class CollegeUseCasesModule { }
