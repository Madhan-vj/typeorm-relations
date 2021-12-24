import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/common/base.service';
import { Repository } from 'typeorm';
import { IProfileService } from './i.profile.service';
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
}
