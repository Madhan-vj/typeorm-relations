import { Controller, Get, HttpCode, Inject } from '@nestjs/common';
import { IStudentService } from 'src/infrastructure/student/i.students.service';

@Controller('Students')
export class GetStudentController {
  constructor(
    @Inject('IStudentService') private readonly StudentService: IStudentService,
  ) { }
  @Get()
  @HttpCode(200)
  async execute(): Promise<any> {
    const res = await this.StudentService.getStudentlist();
    const response = res.map((data) => {
      return {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.profile.gender,
        emailId: data.profile.emailId,
        rollNumber: data.rollNumber,
        courseId: data.courseId,
        collegeName: data.college.collegeName,
        city: data.profile.city,
        isActive: data.isActive,
      };
    });
    console.log(response, 'response');
    return response;
  }
}
