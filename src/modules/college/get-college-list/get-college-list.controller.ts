import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { ICollegeService } from 'src/infrastructure/college/i.college.service';
import { GetCollegeMapper } from './get-college-list-mapper';
import { GetCollegeResponse } from './get-college-list-response';
import { GetCollegeListRequest } from './get-college-list.request';

@Controller('Colleges')
export class GetCollegeController {
 constructor(
  @Inject('ICollegeService') private readonly collegeService: ICollegeService,
  private readonly mapper: GetCollegeMapper,
 ) { }
 @Get()
 @HttpCode(200)
 async execute(
  @Query() request: GetCollegeListRequest,
 ): Promise<Partial<GetCollegeResponse>> {
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
