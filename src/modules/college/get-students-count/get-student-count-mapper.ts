import { Injectable } from '@nestjs/common';
import { CollegePagedModel } from 'src/infrastructure/college/college-paged-model';
import { CollegeRawPagedModel } from 'src/infrastructure/college/college-raw-paged-model';
import { GetStudentCountResponse } from './get-student-count-response';

@Injectable()
export class GetStudentCountMapper {
  public request(
    request: CollegeRawPagedModel,
  ): Partial<GetStudentCountResponse> {
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
          collegeName: data.collegeName,
          numberOfStudents: data.numberOfStudents,
        };
      }),
    };
  }
}
