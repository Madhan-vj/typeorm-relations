import { Injectable } from '@nestjs/common';
import { ProfilePagedModel } from 'src/infrastructure/profile/profile-paged-model';
import { GetProfileResponse } from './get-profile-list-response';

@Injectable()
export class GetProfileMapper {
 public request(request: ProfilePagedModel): Partial<GetProfileResponse> {
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
     gender: data.gender,
     emailId: data.emailId,
     city: data.city,
    };
   }),
  };
 }
}
