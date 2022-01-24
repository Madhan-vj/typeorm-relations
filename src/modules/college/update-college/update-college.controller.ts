import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
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
import { College } from 'src/infrastructure/college/college.entity';
import { ICollegeService } from 'src/infrastructure/college/i.college.service';
import { UpdateCollegeRequest } from './update-college-request';

@Controller('Colleges')
export class UpdateCollegeController {
  constructor(
    @Inject('ICollegeService') private readonly collegeService: ICollegeService,
    @InjectMapper() private mapper: Mapper,
  ) { }
  @Put(':id')
  @HttpCode(204)
  async updateCollege(
    @Param('id') id: string,
    @Body() request: UpdateCollegeRequest,
  ): Promise<void> {
    const college = await this.collegeService.findOne(id);
    if (!college)
      throw new HttpException('college Not Found', HttpStatus.BAD_REQUEST);
    const collegeData = this.mapper.map(request, College, UpdateCollegeRequest);
    collegeData.setId(id);
    await this.collegeService.updateById(id, collegeData);
  }
}
