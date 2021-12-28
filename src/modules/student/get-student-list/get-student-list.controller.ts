import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { IStudentService } from 'src/infrastructure/student/i.students.service';
import { getStudentMapper } from './get-student-list-mapper';
import { GetStudentListResponse } from './get-student-list-response';

@Controller('Students')
export class GetStudentController {
  constructor(
    @Inject('IStudentService') private readonly StudentService: IStudentService,
    private readonly mapper: getStudentMapper,
  ) { }
  @Get()
  @HttpCode(200)
  async execute(): Promise<Partial<GetStudentListResponse>> {
    const res = await this.StudentService.getStudentlist();
    const studentData = this.mapper.request(res);
    console.log(studentData, 'response');
    return studentData;
  }
}
