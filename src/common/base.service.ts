import { Repository, SelectQueryBuilder, UpdateResult } from 'typeorm';
import { IBaseService } from './i.base.service';
import { PagedModel } from './paged-model';
import { SortingDirection } from './sorting-direction';

export class BaseService<TRepository extends Repository<TEntity>, TEntity>
  implements IBaseService<TEntity>
{
  constructor(protected readonly repository: TRepository) { }
  async findAll(): Promise<TEntity[]> {
    return await this.repository.find();
  }

  async findOne(id: string): Promise<TEntity> {
    return await this.repository.findOne(id);
  }

  async insert(record: TEntity): Promise<TEntity> {
    const doc = this.repository.create(record as TEntity);
    return await this.repository.save(doc);
  }

  async updateById(
    id: number | string,
    record: TEntity,
  ): Promise<UpdateResult> {
    return await this.repository.update(id, record as TEntity);
    // return await this.repository.findOne(id);
  }

  async deleteById(id: number | string): Promise<string> {
    await this.repository.delete(id);
    return 'Deleted Successfully';
  }
  async paged(
    queryBuilder: SelectQueryBuilder<TEntity>,
    pageNumber: number,
    pageSize: number,
    orderBy: SortingDirection,
    orderByPropertyName: string,
  ): Promise<PagedModel<TEntity>> {
    const [items, itemsCount] = await queryBuilder
      .skip((pageNumber - 1) * pageSize)
      .take(pageSize)
      .orderBy(orderByPropertyName, orderBy)
      .getManyAndCount();

    const pagedResponse = new PagedModel<TEntity>({
      pageNumber,
      pageSize,
      orderBy,
      orderByPropertyName,
      itemsCount,
      items,
    });

    return pagedResponse;
  }
  async pagedRaw(
    queryBuilder: SelectQueryBuilder<TEntity>,
    pageNumber: number,
    pageSize: number,
    orderBy: SortingDirection,
    orderByPropertyName: string
  ): Promise<PagedModel<any>> {
    const items = await queryBuilder
      .offset((pageNumber - 1) * pageSize)
      .limit(pageSize)
      .orderBy(orderByPropertyName, orderBy)
      .getRawMany();

    const itemsCount = await queryBuilder.getCount();

    const pagedResponse = new PagedModel<any>({
      pageNumber,
      pageSize,
      orderBy,
      orderByPropertyName,
      itemsCount,
      items,
    });

    return pagedResponse;
  }
  createQueryBuilder(alias = ''): SelectQueryBuilder<TEntity> {
    return this.repository.createQueryBuilder(alias);
  }
}
