import { Injectable } from '@nestjs/common';
import { StudentPagedModel } from 'src/infrastructure/student/student-paged-model';
import { GetStudentListResponse } from './get-student-list-response';

@Injectable()
export class GetStudentMapper {
 public request(request: StudentPagedModel): Partial<GetStudentListResponse> {
  return {
   pageNumber: request.pageNumber,
   pageSize: request.pageSize,
   itemsCount: request.itemsCount,
   orderBy: request.orderBy,
   orderByPropertyName: request.orderByPropertyName,
   pageCount: request.pageCount,
   items: request.items.map((data) => {
    return {
     id: data.id,
     firstName: data.firstName,
     lastName: data.lastName,
     rollNumber: data.rollNumber,
     courseId: data.courseId,
     isActive: data.isActive,
     collegeId: data.collegeId,
     profileId: data.profileId,
    };
   }),
  };
 }
}
