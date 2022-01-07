import { Injectable } from '@nestjs/common';
import { CollegeBase } from '../college-base';

@Injectable()
export class UpdateCollegeMapper {
  public request(id: string, request: CollegeBase): Partial<CollegeBase> {
    return request;
  }
}
