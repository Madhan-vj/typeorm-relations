import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { CollegeRawPagedModel } from 'src/infrastructure/college/college-raw-paged-model';
import { ICollegeService } from 'src/infrastructure/college/i.college.service';
import { GetStudentCountResponse } from './get-student-count-response';
import { GetStudentCountRequest } from './get-student-count.request';

@Controller('StudentsCount')
export class GetStudentCountController {
 constructor(
  @Inject('ICollegeService') private readonly collegeService: ICollegeService,
  @InjectMapper() private mapper: Mapper,
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
  const response = this.mapper.map(
   result,
   GetStudentCountResponse,
   CollegeRawPagedModel,
  );
  return response;
 }
}
