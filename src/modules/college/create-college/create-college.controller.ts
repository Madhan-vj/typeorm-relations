import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { CreateCollegeRequest } from './create-college-request';
import { ICollegeService } from 'src/infrastructure/college/i.college.service';
import { CreateCollegeResponse } from './create-college-response';
import { Mapper } from '@automapper/types';
import { College } from 'src/infrastructure/college/college.entity';
import { InjectMapper } from '@automapper/nestjs';

@Controller('Colleges')
export class CreateCollegeController {
  constructor(
    @Inject('ICollegeService') private readonly collegeService: ICollegeService,
    @InjectMapper() private readonly mapper: Mapper,
  ) { }
  @Post()
  @HttpCode(201)
  async execute(
    @Body() request: CreateCollegeRequest,
  ): Promise<CreateCollegeResponse> {
    const collegeData = this.mapper.map(request, College, CreateCollegeRequest);
    const result = await this.collegeService.insert(collegeData);
    return { id: result.id };
  }
}
