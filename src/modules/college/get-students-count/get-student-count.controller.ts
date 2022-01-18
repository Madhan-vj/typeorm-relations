import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { ICollegeService } from 'src/infrastructure/college/i.college.service';
import { GetStudentCountMapper } from './get-student-count-mapper';
import { GetStudentCountResponse } from './get-student-count-response';
import { GetStudentCountRequest } from './get-student-count.request';

@Controller('StudentsCount')
export class GetStudentCountController {
 constructor(
  @Inject('ICollegeService') private readonly collegeService: ICollegeService,
  private readonly mapper: GetStudentCountMapper,
 ) { }
 @Get()
 @HttpCode(200)
 async execute(
  @Query() request: GetStudentCountRequest,
 ): Promise<Partial<GetStudentCountResponse>> {
  const result = await this.collegeService.getStudentCountlist(
   request.pageNumber,
   request.pageSize,
   request.orderBy,
   request.orderByPropertyName,
  );
  console.log(result, "rezzz")
  const response = this.mapper.request(result);
  return response;
 }
}
