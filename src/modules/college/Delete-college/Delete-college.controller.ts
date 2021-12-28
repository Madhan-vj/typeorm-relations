import { Controller, Delete, HttpCode, Inject, Param } from '@nestjs/common';
import { ICollegeService } from 'src/infrastructure/college/i.college.service';

@Controller('Colleges')
export class DeleteCollegeController {
 constructor(
  @Inject('ICollegeService') private readonly collegeService: ICollegeService,
 ) { }

 @Delete(':id')
 @HttpCode(204)
 async execute(@Param('id') id: string): Promise<void> {
  await this.collegeService.deleteById(id);
 }
}
