import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { SortingDirection } from 'src/common/sorting-direction';
import { ICollegeService } from 'src/infrastructure/college/i.college.service';
import { getCollegeMapper } from './get-college-list-mapper';
import { getCollegeResponse } from './get-college-list-response';

@Controller('Colleges')
export class GetCollegeController {
 constructor(
  @Inject('ICollegeService') private readonly CollegeService: ICollegeService,
  private readonly mapper: getCollegeMapper,
 ) { }
 @Get()
 @HttpCode(200)
 async execute(
  @Query('pageNumber') pageNumber = 1,
  @Query('pageSize') pageSize = 10,
  @Query('orderBy') orderBy: SortingDirection = SortingDirection.ASC,
  @Query('pageNumber') orderByPropertyName = 'collegeName',
 ): Promise<Partial<getCollegeResponse>> {
  const result = await this.CollegeService.getCollegelist(
   pageNumber,
   pageSize,
   orderBy,
   orderByPropertyName,
  );
  return result;
 }
}
