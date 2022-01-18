import { IBaseService } from 'src/common/i.base.service';
import { SortingDirection } from 'src/common/sorting-direction';
import { CollegePagedModel } from './college-paged-model';
import { College } from './college.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICollegeService extends IBaseService<College> {
 getCollegelist(
  pageNumber: number,
  pageSize: number,
  orderBy: SortingDirection,
  orderByPropertyName: string,
 ): Promise<CollegePagedModel>;
 getStudentCountlist(
  pageNumber: number,
  pageSize: number,
  orderBy: SortingDirection,
  orderByPropertyName: string,
 ): Promise<CollegePagedModel>;
}
