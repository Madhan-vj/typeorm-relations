import { Injectable } from '@nestjs/common';
import { CollegePagedModel } from 'src/infrastructure/college/college-paged-model';
import { getCollegeResponse } from './get-college-list-response';

@Injectable()
export class getCollegeMapper {
  public request(request: CollegePagedModel): Partial<getCollegeResponse> {
    return {
      pageNumber: request.pageNumber,
      pageSize: request.pageSize,
      itemsCount: request.itemsCount,
      orderBy: request.orderBy,
      orderByPropertyName: request.orderByPropertyName,
      pageCount: request.pageCount,
      items: request.items,
    };
  }
}
