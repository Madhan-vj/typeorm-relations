import { AutoMap } from '@automapper/classes';
import { SortingDirection } from './sorting-direction';
export class PagedResponse {
    @AutoMap()
    readonly pageNumber: number;
    @AutoMap()
    readonly pageSize: number;
    @AutoMap()
    readonly itemsCount: number;
    @AutoMap()
    readonly pageCount: number;
    @AutoMap()
    readonly orderBy: string | SortingDirection;
    @AutoMap()
    readonly orderByPropertyName: string;
}
