import { Controller, Delete, HttpCode, Inject, Param } from '@nestjs/common';
import { IStudentService } from 'src/infrastructure/student/i.students.service';

@Controller('Students')
export class DeleteStudentController {
 constructor(
  @Inject('IStudentService') private readonly studentService: IStudentService,
 ) { }

 @Delete(':id')
 @HttpCode(204)
 async execute(@Param('id') id: string): Promise<void> {
  await this.studentService.deleteById(id);
 }
}
