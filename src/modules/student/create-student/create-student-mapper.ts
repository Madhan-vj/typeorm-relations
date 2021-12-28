import { Injectable } from '@nestjs/common';
import { Student } from 'src/infrastructure/student/student.entity';
import { CreateStudentRequest } from './create-student-request';
@Injectable()
export class CreateStudentMapper {
 public request(request: CreateStudentRequest): Partial<Student> {
  return {
   firstName: request.firstName,
   lastName: request.lastName,
   rollNumber: request.rollNumber,
   courseId: request.courseId,
   profileId: request.profileId,
   collegeId: request.collegeId,
  };
 }
}
