import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { CollegePagedModel } from 'src/infrastructure/college/college-paged-model';
import { IStudentService } from 'src/infrastructure/student/i.students.service';
import { StudentFilter } from 'src/infrastructure/student/student-filter';
import { StudentPagedModel } from 'src/infrastructure/student/student-paged-model';
import { GetStudentListResponse } from './get-student-list-response';
import { GetStudentRequest } from './get-student-list.request';

@Controller('Students')
export class GetStudentController {
  constructor(
    @Inject('IStudentService') private readonly studentService: IStudentService,
    @InjectMapper() private mapper: Mapper,
  ) { }
  @Get()
  @HttpCode(200)
  async execute(
    @Query() request: GetStudentRequest,
  ): Promise<Partial<GetStudentListResponse>> {
    const filter: StudentFilter = {
      collegeId: request.collegeId,
      profileId: request.profileId,
    };
    const result = await this.studentService.getStudentlist(
      request.pageNumber,
      request.pageSize,
      request.orderBy,
      request.orderByPropertyName,
      filter,
    );
    const response = this.mapper.map(
      result,
      GetStudentListResponse,
      StudentPagedModel,
    );
    return response;
  }
}
