import { Injectable } from '@nestjs/common';
import { CollegeBase } from '../college-base';

@Injectable()
export class updateCollegeMapper {
 public request(id: string, request: CollegeBase): Partial<CollegeBase> {
  return request;
 }
}
