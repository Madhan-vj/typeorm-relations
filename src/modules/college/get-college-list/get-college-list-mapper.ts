import { Injectable } from '@nestjs/common';
import { CollegePagedModel } from 'src/infrastructure/college/college-paged-model';
import { GetCollegeResponse } from './get-college-list-response';

@Injectable()
export class GetCollegeMapper {
  public request(request: CollegePagedModel): Partial<GetCollegeResponse> {
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
        };
      }),
    };
  }
}
