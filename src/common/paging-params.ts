import { SortingDirection } from './sorting-direction';

export class PagingParams {

 readonly orderBy: SortingDirection = SortingDirection.ASC;

 readonly orderByPropertyName: string;

 readonly pageNumber: number = 1;

 readonly pageSize: number = 10;
}
