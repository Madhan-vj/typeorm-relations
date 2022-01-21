import { SelectQueryBuilder, UpdateResult } from 'typeorm';
import { PagedModel } from './paged-model';
import { SortingDirection } from './sorting-direction';

export interface IBaseService<T> {
 findOne(id: number | string): Promise<T>;
 findAll(): Promise<T[]>;
 insert(record: Partial<T>): Promise<T>;
 updateById(id: number | string, record: Partial<T>): Promise<UpdateResult>;
 deleteById(id: number | string): Promise<string>;
 paged(
  queryBuilder: SelectQueryBuilder<T>,
  pageNumber: number,
  pageSize: number,
  orderBy: SortingDirection,
  orderByPropertyName: string,
 ): Promise<PagedModel<T>>;
 pagedRaw(
  queryBuilder: SelectQueryBuilder<T>,
  pageNumber: number,
  pageSize: number,
  orderBy: SortingDirection,
  orderByPropertyName: string,
 ): Promise<PagedModel<any>>;
}
