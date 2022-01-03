import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import { SortingDirection } from './sorting-direction';

export class PagingParams {
 // @IsEnum(SortingDirection)
 // @IsOptional()
 readonly orderBy: SortingDirection = SortingDirection.ASC;

 readonly orderByPropertyName: string;

 // @Type(() => Number)
 // @IsInt()
 // @Min(1)
 // @IsOptional()
 readonly pageNumber: number = 1;

 // @Type(() => Number)
 // @IsInt()
 // @Max(200)
 // @IsOptional()
 readonly pageSize: number = 10;
}
