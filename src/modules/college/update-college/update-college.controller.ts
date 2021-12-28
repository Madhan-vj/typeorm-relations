import {
 Body,
 Controller,
 HttpCode,
 HttpException,
 HttpStatus,
 Inject,
 Param,
 Put,
} from '@nestjs/common';
import { ICollegeService } from 'src/infrastructure/college/i.college.service';
import { updateCollegeMapper } from './update-college-mapper';
import { UpdateCollegeRequest } from './update-college-request';

@Controller('Colleges')
export class UpdateCollegeController {
 constructor(
  @Inject('ICollegeService') private readonly CollegeService: ICollegeService,
  private readonly mapper: updateCollegeMapper,
 ) { }
 @Put(':id')
 @HttpCode(204)
 async updateCollege(
  @Param('id') id: string,
  @Body() request: UpdateCollegeRequest,
 ): Promise<void> {
  const college = await this.CollegeService.findOne(id);
  if (!college)
   throw new HttpException('college Not Found', HttpStatus.BAD_REQUEST);
  const collegeData = this.mapper.request(id, request);
  await this.CollegeService.updateById(id, collegeData);
 }
}
