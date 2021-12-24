import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database.module';
import { CreateStudentController } from './create-student/create-student.controller';
import { GetStudentController } from './get-student-list/get-student-list.controller';

@Module({
 imports: [DatabaseModule],
 controllers: [
  GetStudentController,
  CreateStudentController,
 ],
 providers: [],
})
export class StudentUseCasesModule { }
