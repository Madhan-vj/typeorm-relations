import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base.service';
import { SortingDirection } from 'src/common/sorting-direction';
import { Repository } from 'typeorm';
import { CollegePagedModel } from './college-paged-model';
import { College } from './college.entity';
import { ICollegeService } from './i.college.service';
import { getRepository } from 'typeorm';
import { Student } from '../student/student.entity';
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
  // SELECT `typeorm-relations`.college.id,`typeorm-relations`.college.collegeName,COUNT(`typeorm-relations`.student.id) AS numberOfStudents FROM `typeorm-relations`.college LEFT JOIN `typeorm-relations`.student ON `typeorm-relations`.college.id = `typeorm-relations`.student.collegeId GROUP BY `typeorm-relations`.college.collegeName
  const queryBuilder = this.createQueryBuilder('c');
  queryBuilder.leftJoinAndSelect('c.student', 'cs');
  queryBuilder.addSelect('COUNT("cs.profileId") AS numberOfStudents');
  queryBuilder.groupBy('c.id');
  // await queryBuilder.where('cs.collegeId= :id', { id: 'c.id' });
  // queryBuilder.groupBy('c.collegeName');
  // queryBuilder.loadRelationCountAndMap('c.numberOfStudents', 'c.student');

  // const user = await getRepository(College)
  //  .createQueryBuilder('c')
  //  .select('COUNT(c.student) AS numberOfStudents')
  //  .from(College, 'c')
  //  .leftJoin(Student, 's');
  // .groupBy('c.collegeName')
  // .getRawMany();
  // console.log(user, 'userzz');
  const result = await this.paged(
   queryBuilder,
   pageNumber,
   pageSize,
   orderBy,
   orderByPropertyName,
  );
  console.log(JSON.stringify(result), 'resultt');
  return result;
 }
}
