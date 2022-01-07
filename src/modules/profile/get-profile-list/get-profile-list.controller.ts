import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { IProfileService } from 'src/infrastructure/profile/i.profile.service';
import { GetProfileMapper } from './get-profile-list-mapper';
import { GetProfileResponse } from './get-profile-list-response';
import { GetProfileListRequest } from './get-profile-list.request';

@Controller('Profiles')
export class GetProfileController {
  constructor(
    @Inject('IProfileService') private readonly profileService: IProfileService,
    private readonly mapper: GetProfileMapper,
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
    const response = this.mapper.request(result);
    return response;
  }
}
