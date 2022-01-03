import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base.service';
import { SortingDirection } from 'src/common/sorting-direction';
import { Repository } from 'typeorm';
import { IProfileService } from './i.profile.service';
import { ProfilePagedModel } from './profile-paged-model';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService
 extends BaseService<Repository<Profile>, Profile>
 implements IProfileService {
 constructor(
  @InjectRepository(Profile)
  protected readonly repository: Repository<Profile>,
 ) {
  super(repository);
 }
 public async getProfilelist(
  pageNumber: number,
  pageSize: number,
  orderBy: SortingDirection,
  orderByPropertyName: string,
 ): Promise<ProfilePagedModel> {
  const queryBuilder = this.createQueryBuilder('p');
  console.log(queryBuilder);
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
