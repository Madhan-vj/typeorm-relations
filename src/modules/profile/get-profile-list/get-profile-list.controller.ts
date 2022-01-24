import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { IProfileService } from 'src/infrastructure/profile/i.profile.service';
import { ProfilePagedModel } from 'src/infrastructure/profile/profile-paged-model';
import { GetProfileResponse } from './get-profile-list-response';
import { GetProfileListRequest } from './get-profile-list.request';

@Controller('Profiles')
export class GetProfileController {
  constructor(
    @Inject('IProfileService') private readonly profileService: IProfileService,
    @InjectMapper() private mapper: Mapper,
  ) { }
  @Get()
  @HttpCode(200)
  async execute(
    @Query() request: GetProfileListRequest,
  ): Promise<Partial<GetProfileResponse>> {
    const result = await this.profileService.getProfilelist(
      request.pageNumber,
      request.pageSize,
      request.orderBy,
      request.orderByPropertyName,
    );
    const response = this.mapper.map(
      result,
      GetProfileResponse,
      ProfilePagedModel,
    );
    return response;
  }
}
