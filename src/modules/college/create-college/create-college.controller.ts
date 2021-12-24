import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { CreateCollegeRequest } from './create-college-request';
import { ICollegeService } from 'src/infrastructure/college/i.college.service';

@Controller('Colleges')
export class CreateCollegeController {
  constructor(
    @Inject('ICollegeService') private readonly CollegeService: ICollegeService,
  ) { }
  @Post()
  @HttpCode(201)
  async execute(@Body() request: CreateCollegeRequest): Promise<any> {
    console.log(request, 'request');
    const result = await this.CollegeService.insert(request);
    return { id: result.id };
  }
}
