import { Controller, Get, HttpCode, Inject } from '@nestjs/common';
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
 async execute(): Promise<Partial<getCollegeResponse>> {
  const result = await this.CollegeService.findAll();
  const collegeData = this.mapper.request(result);
  console.log(result, 'result');
  return collegeData;
 }
}
