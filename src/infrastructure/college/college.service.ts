import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base.service';
import { Repository } from 'typeorm';
import { College } from './college.entity';
import { ICollegeService } from './i.college.service';

@Injectable()
export class CollegeService
 extends BaseService<Repository<College>, College>
 implements ICollegeService {
 constructor(
  @InjectRepository(College)
  protected readonly repository: Repository<College>,
 ) {
  super(repository);
 }
 queryBuilder = this.createQueryBuilder('c');
}
