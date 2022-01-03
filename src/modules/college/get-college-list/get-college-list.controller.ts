import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { CollegePagedModel } from 'src/infrastructure/college/college-paged-model';
import { ICollegeService } from 'src/infrastructure/college/i.college.service';
import { getCollegeMapper } from './get-college-list-mapper';
import { getCollegeResponse } from './get-college-list-response';
import { GetCollegeListRequest } from './get-college-list.request';

@Controller('Colleges')
export class GetCollegeController {
 constructor(
  @Inject('ICollegeService') private readonly collegeService: ICollegeService,
  private readonly mapper: getCollegeMapper,
 ) { }
 @Get()
 @HttpCode(200)
 async execute(
  @Query() request: GetCollegeListRequest,
 ): Promise<Partial<getCollegeResponse>> {
  const result = await this.collegeService.getCollegelist(
   request.pageNumber,
   request.pageSize,
   request.orderBy,
   request.orderByPropertyName,
  );
  const response = this.mapper.request(result);
  return response;
 }
}
