import { Injectable } from '@nestjs/common';
import { College } from 'src/infrastructure/college/college.entity';
import { CreateCollegeRequest } from './create-college-request';

@Injectable()
export class CreateCollegeMapper {
  public request(request: CreateCollegeRequest): Partial<College> {
    return {
      collegeName: request.collegeName,
    };
  }
}
