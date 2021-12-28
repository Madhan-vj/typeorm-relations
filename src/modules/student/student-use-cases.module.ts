import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infrastructure/database.module';
import { CreateStudentMapper } from './create-student/create-student-mapper';
import { CreateStudentController } from './create-student/create-student.controller';
import { getStudentMapper } from './get-student-list/get-student-list-mapper';
import { GetStudentController } from './get-student-list/get-student-list.controller';

@Module({
 imports: [DatabaseModule],
 controllers: [GetStudentController, CreateStudentController],
 providers: [CreateStudentMapper, getStudentMapper],
})
export class StudentUseCasesModule { }
