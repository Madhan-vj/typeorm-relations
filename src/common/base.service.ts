import { Repository, SelectQueryBuilder } from 'typeorm';
import { IBaseService } from './i.base.service';

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

 async updateById(id: number | string, record: TEntity): Promise<TEntity> {
  await this.repository.update(id, record as TEntity);
  return await this.repository.findOne(id);
 }

 async deleteById(id: number | string): Promise<string> {
  await this.repository.delete(id);
  return 'Deleted Successfully';
 }
 createQueryBuilder(alias = ''): SelectQueryBuilder<TEntity> {
  return this.repository.createQueryBuilder(alias);
 }
}
