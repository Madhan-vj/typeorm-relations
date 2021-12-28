import { Injectable } from '@nestjs/common';
import { Student } from 'src/infrastructure/student/student.entity';
import { GetStudentListResponse } from './get-student-list-response';
import { GetStudentRequest } from './get-student-list.request';

@Injectable()
export class getStudentMapper {
 public request(request: Student[]): Partial<GetStudentListResponse> {
  const response = request.map((data) => {
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
  return { items: response };
 }
}
