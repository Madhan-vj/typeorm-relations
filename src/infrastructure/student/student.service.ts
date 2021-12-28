import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base.service';
import { Repository } from 'typeorm';
import { IStudentService } from './i.students.service';
import { Student } from './student.entity';

@Injectable()
export class StudentService
 extends BaseService<Repository<Student>, Student>
 implements IStudentService {
 constructor(
  @InjectRepository(Student)
  protected readonly repository: Repository<Student>,
 ) {
  super(repository);
 }
 async getStudentlist(): Promise<Student[]> {
  const queryBuilder = this.createQueryBuilder('s');
  queryBuilder.leftJoinAndSelect('s.college', 'sc');
  queryBuilder.leftJoinAndSelect('s.profile', 'sp');
  return queryBuilder.getMany();
  // console.log(queryBuilder);
  // const result = {
  //  queryBuilder,
  //  pageNumber,
  //  pageSize,
  //  orderBy,
  //  orderByPropertyName,
  // };
  // return result;
 }
 async getStudent(collegeId: string): Promise<Student> {
  const queryBuilder = this.createQueryBuilder('s');
  return queryBuilder.getOne();
 }
}
