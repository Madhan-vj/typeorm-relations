import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base.service';
import { SortingDirection } from 'src/common/sorting-direction';
import { Repository } from 'typeorm';
import { CollegePagedModel } from './college-paged-model';
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
 public async getCollegelist(
  pageNumber: number,
  pageSize: number,
  orderBy: SortingDirection,
  orderByPropertyName: string,
 ): Promise<CollegePagedModel> {
  const queryBuilder = this.createQueryBuilder('c');
  const result = await this.paged(
   queryBuilder,
   pageNumber,
   pageSize,
   orderBy,
   orderByPropertyName,
  );
  return result;
 }
 public async getStudentCountlist(
  pageNumber: number,
  pageSize: number,
  orderBy: SortingDirection,
  orderByPropertyName: string,
 ): Promise<CollegePagedModel> {
  const queryBuilder = this.createQueryBuilder('c');
  queryBuilder.leftJoinAndSelect(`c.student`, 'cs');
  const result = await this.paged(
   queryBuilder,
   pageNumber,
   pageSize,
   orderBy,
   orderByPropertyName,
  );
  return result;
 }
}
