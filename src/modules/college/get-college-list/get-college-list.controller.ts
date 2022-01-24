import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { CollegePagedModel } from 'src/infrastructure/college/college-paged-model';
import { ICollegeService } from 'src/infrastructure/college/i.college.service';
import { GetCollegeResponse } from './get-college-list-response';
import { GetCollegeListRequest } from './get-college-list.request';

@Controller('Colleges')
export class GetCollegeController {
 constructor(
  @Inject('ICollegeService') private readonly collegeService: ICollegeService,
  @InjectMapper() private mapper: Mapper,
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
  const response = this.mapper.map(
   result,
   GetCollegeResponse,
   CollegePagedModel,
  );
  console.log(response, 'respponse');
  return response;
 }
}
