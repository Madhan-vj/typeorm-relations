import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import {
 Body,
 Controller,
 HttpCode,
 HttpException,
 HttpStatus,
 Inject,
 Param,
 Put,
} from '@nestjs/common';
import { IStudentService } from 'src/infrastructure/student/i.students.service';
import { Student } from 'src/infrastructure/student/student.entity';
import { updateStudentMapper } from './update-student-mapper';
import { UpdateStudentRequest } from './update-student-request';

@Controller('Students')
export class UpdateStudentController {
 constructor(
  @Inject('IStudentService') private readonly studentService: IStudentService,
  @InjectMapper() private mapper: Mapper,
 ) { }
 @Put(':id')
 @HttpCode(204)
 async updateStudent(
  @Param('id') id: string,
  @Body() request: UpdateStudentRequest,
 ): Promise<void> {
  const student = await this.studentService.findOne(id);
  if (!student)
   throw new HttpException('Profile Not Found', HttpStatus.BAD_REQUEST);
  const studentData = this.mapper.map(request, Student, UpdateStudentRequest);
  studentData.setId(id);
  await this.studentService.updateById(id, studentData);
 }
}
