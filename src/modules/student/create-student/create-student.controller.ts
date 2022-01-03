import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { IStudentService } from 'src/infrastructure/student/i.students.service';
import { CreateStudentMapper } from './create-student-mapper';
import { CreateStudentRequest } from './create-student-request';
import { CreateStudentResponse } from './create-student-response';

@Controller('Students')
export class CreateStudentController {
  constructor(
    @Inject('IStudentService') private readonly studentService: IStudentService,
    private readonly mapper: CreateStudentMapper,
  ) { }
  @Post()
  @HttpCode(201)
  async execute(
    @Body() request: CreateStudentRequest,
  ): Promise<CreateStudentResponse> {
    const studentData = this.mapper.request(request);
    const result = await this.studentService.insert(studentData);
    return { id: result.id };
  }
}
