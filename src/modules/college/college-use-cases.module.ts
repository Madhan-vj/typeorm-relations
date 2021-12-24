import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database.module';
import { CreateCollegeController } from './create-college/create-college.controller';
import { GetCollegeController } from './get-college-list/get-college-list.controller';

@Module({
 imports: [DatabaseModule],
 controllers: [GetCollegeController, CreateCollegeController],
 providers: [],
})
export class CollegeUseCasesModule { }
