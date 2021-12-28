import { Injectable } from '@nestjs/common';
import { StudentBase } from '../student-base';

@Injectable()
export class updateStudentMapper {
 public request(id: string, request: StudentBase): Partial<StudentBase> {
  return request;
 }
}
