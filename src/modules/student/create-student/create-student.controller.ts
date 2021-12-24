import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { IStudentService } from 'src/infrastructure/student/i.students.service';
import { CreateStudentRequest } from './create-student-request';

@Controller('Students')
export class CreateStudentController {
  constructor(
    @Inject('IStudentService') private readonly StudentService: IStudentService,
  ) { }
  @Post()
  @HttpCode(201)
  async execute(@Body() request: CreateStudentRequest): Promise<any> {
    const result = await this.StudentService.insert(request);
    console.log(result, 'result');
    return { id: result.id };
  }
}
