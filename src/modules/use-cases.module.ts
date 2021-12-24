import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database.module';
import { CollegeUseCasesModule } from './college/college-use-cases.module';
import { ProfileUseCasesModule } from './profile/profile-use-cases.module';
import { StudentUseCasesModule } from './student/student-use-cases.module';

@Module({
 imports: [
  DatabaseModule,
  StudentUseCasesModule,
  ProfileUseCasesModule,
  CollegeUseCasesModule,
 ],
 controllers: [],
 providers: [],
})
export class UseCasesModule { }
