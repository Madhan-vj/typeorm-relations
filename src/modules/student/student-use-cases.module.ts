import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database.module';
import { CreateStudentMapper } from './create-student/create-student-mapper';
import { CreateStudentController } from './create-student/create-student.controller';
import { DeleteStudentController } from './delete-student/delete-student.controller';
import { GetStudentMapper } from './get-student-list/get-student-list-mapper';
import { GetStudentController } from './get-student-list/get-student-list.controller';
import { updateStudentMapper } from './update-student/update-student-mapper';
import { UpdateStudentController } from './update-student/update-student.controller';

@Module({
 imports: [DatabaseModule],
 controllers: [
  GetStudentController,
  CreateStudentController,
  UpdateStudentController,
  DeleteStudentController,
 ],
 providers: [CreateStudentMapper, GetStudentMapper, updateStudentMapper],
})
export class StudentUseCasesModule { }
