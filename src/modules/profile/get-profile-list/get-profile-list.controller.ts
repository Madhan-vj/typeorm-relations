import { Controller, Get, HttpCode, Inject, Query } from '@nestjs/common';
import { SortingDirection } from 'src/common/sorting-direction';
import { IProfileService } from 'src/infrastructure/profile/i.profile.service';
import { getProfileMapper } from './get-profile-list-mapper';
import { GetProfileResponse } from './get-profile-list-response';

@Controller('Profiles')
export class GetProfileController {
  constructor(
    @Inject('IProfileService') private readonly ProfileService: IProfileService,
    private readonly mapper: getProfileMapper,
  ) { }
  @Get()
  @HttpCode(200)
  async execute(
    @Query('pageNumber') pageNumber = 1,
    @Query('pageSize') pageSize = 10,
    @Query('orderBy') orderBy: SortingDirection = SortingDirection.ASC,
    @Query('pageNumber') orderByPropertyName = 'emailId',
  ): Promise<Partial<GetProfileResponse>> {
    const res = await this.ProfileService.getProfilelist(
      pageNumber,
      pageSize,
      orderBy,
      orderByPropertyName,
    );
    // const profileData = this.mapper.request(res);
    // console.log(res, 'result');
    return res;
  }
}
