import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { IStudentService } from 'src/infrastructure/student/i.students.service';
import { GetStudentMapper } from './get-student-list-mapper';
import { GetStudentListResponse } from './get-student-list-response';
import { GetStudentRequest } from './get-student-list.request';

@Controller('Students')
export class GetStudentController {
  constructor(
    @Inject('IStudentService') private readonly studentService: IStudentService,
    private readonly mapper: GetStudentMapper,
  ) { }
  @Get()
  @HttpCode(200)
  async execute(
    @Query() request: GetStudentRequest,
  ): Promise<Partial<GetStudentListResponse>> {
    const result = await this.studentService.getStudentlist(
      request.pageNumber,
      request.pageSize,
      request.orderBy,
      request.orderByPropertyName,
    );
    const response = this.mapper.request(result);
    return response;
  }
}
