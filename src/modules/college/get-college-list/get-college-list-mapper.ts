import { Injectable } from '@nestjs/common';
import { College } from 'src/infrastructure/college/college.entity';
import { getCollegeResponse } from './get-college-list-response';

@Injectable()
export class getCollegeMapper {
  public request(request: College[]): Partial<getCollegeResponse> {
    return { items: request };
  }
}
