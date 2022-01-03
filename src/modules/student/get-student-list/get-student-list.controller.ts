import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { SortingDirection } from 'src/common/sorting-direction';
import { IStudentService } from 'src/infrastructure/student/i.students.service';
import { getStudentMapper } from './get-student-list-mapper';
import { GetStudentListResponse } from './get-student-list-response';
import { GetStudentRequest } from './get-student-list.request';

@Controller('Students')
export class GetStudentController {
  constructor(
    @Inject('IStudentService') private readonly StudentService: IStudentService,
    private readonly mapper: getStudentMapper,
  ) { }
  @Get()
  @HttpCode(200)
  async execute(
    @Query('pageNumber') pageNumber = 1,
    @Query('pageSize') pageSize = 10,
    @Query('orderBy') orderBy: SortingDirection = SortingDirection.ASC,
    @Query('pageNumber') orderByPropertyName = 'id',
  ): Promise<Partial<GetStudentListResponse>> {
    const res = await this.StudentService.getStudentlist(
      pageNumber,
      pageSize,
      orderBy,
      orderByPropertyName,
    );
    // console.log(res, 'ress');
    // const studentData = this.mapper.request(res);
    // console.log(studentData, 'response');
    return res;
  }
}
