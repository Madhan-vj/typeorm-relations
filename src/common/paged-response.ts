import { SortingDirection } from './sorting-direction';
export class PagedResponse {
    readonly pageNumber: number;
    readonly pageSize: number;
    readonly itemsCount: number;
    readonly pageCount: number;
    readonly orderBy: string | SortingDirection;
    readonly orderByPropertyName: string;
}
