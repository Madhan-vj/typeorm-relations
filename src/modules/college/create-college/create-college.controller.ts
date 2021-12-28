import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { CreateCollegeRequest } from './create-college-request';
import { ICollegeService } from 'src/infrastructure/college/i.college.service';
import { CreateCollegeMapper } from './create-college-mapper';
import { CreateCollegeResponse } from './create-college-response';

@Controller('Colleges')
export class CreateCollegeController {
  constructor(
    @Inject('ICollegeService') private readonly CollegeService: ICollegeService,
    private readonly mapper: CreateCollegeMapper,
  ) { }
  @Post()
  @HttpCode(201)
  async execute(
    @Body() request: CreateCollegeRequest,
  ): Promise<CreateCollegeResponse> {
    const collegeData = this.mapper.request(request);
    const result = await this.CollegeService.insert(collegeData);
    return { id: result.id };
  }
}
