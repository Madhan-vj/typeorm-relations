import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database.module';
import { CreateStudentMapper } from './create-student/create-student-mapper';
import { CreateStudentController } from './create-student/create-student.controller';
import { getStudentMapper } from './get-student-list/get-student-list-mapper';
import { GetStudentController } from './get-student-list/get-student-list.controller';
import { updateStudentMapper } from './update-student/update-student-mapper';
import { UpdateStudentController } from './update-student/update-student.controller';

@Module({
 imports: [DatabaseModule],
 controllers: [
  GetStudentController,
  CreateStudentController,
  UpdateStudentController,
 ],
 providers: [CreateStudentMapper, getStudentMapper, updateStudentMapper],
})
export class StudentUseCasesModule { }
