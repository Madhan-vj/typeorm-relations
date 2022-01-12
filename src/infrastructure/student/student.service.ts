import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base.service';
import { SortingDirection } from 'src/common/sorting-direction';
import { Repository } from 'typeorm';
import { College } from '../college/college.entity';
import { IStudentService } from './i.students.service';
import { StudentFilter } from './student-filter';
import { StudentPagedModel } from './student-paged-model';
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
  public async getStudentlist(
    pageNumber: number,
    pageSize: number,
    orderBy: SortingDirection,
    orderByPropertyName: string,
    filter: StudentFilter,
  ): Promise<StudentPagedModel> {
    const queryBuilder = this.createQueryBuilder('s');
    queryBuilder.leftJoinAndSelect(`s.college`, 'sc');
    queryBuilder.leftJoinAndSelect('s.profile', 'sp');
    if (filter.collegeId)
      queryBuilder.andWhere('s.collegeId = :collegeId', {
        collegeId: filter.collegeId,
      });

    if (filter.profileId)
      queryBuilder.andWhere('s.profileId = :profileId', {
        profileId: filter.profileId,
      });

    const result = await this.paged(
      queryBuilder,
      pageNumber,
      pageSize,
      orderBy,
      orderByPropertyName,
    );
    return result;
  }
  async getStudent(collegeId: string): Promise<Student> {
    const queryBuilder = this.createQueryBuilder('s');
    queryBuilder.leftJoinAndSelect(`s.college`, 'sc');
    queryBuilder.where('s.collegeId = sc.id');
    return queryBuilder.getOne();
  }
}
