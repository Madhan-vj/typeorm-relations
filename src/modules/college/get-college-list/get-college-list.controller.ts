import { Controller, Get, HttpCode, Inject } from '@nestjs/common';
import { College } from 'src/infrastructure/college/college.entity';
import { ICollegeService } from 'src/infrastructure/college/i.college.service';

@Controller('Colleges')
export class GetCollegeController {
 constructor(
  @Inject('ICollegeService') private readonly CollegeService: ICollegeService,
 ) { }
 @Get()
 @HttpCode(200)
 async execute(): Promise<College[]> {
  const result = await this.CollegeService.findAll();
  console.log(result, 'result');
  return result;
 }
}
