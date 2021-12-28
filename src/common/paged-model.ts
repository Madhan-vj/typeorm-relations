export class PagedResponse {
 readonly pageNumber: number;
 readonly pageSize: number;
 readonly itemsCount: number;
 readonly pageCount: number;
 readonly orderBy: string;
 readonly orderByPropertyName: string;
 items: any[];

 constructor({
  pageNumber,
  pageSize,
  orderBy,
  orderByPropertyName,
  itemsCount,
  items,
 }: any) {
  this.pageNumber = pageNumber;
  this.pageSize = pageSize;
  this.itemsCount = itemsCount;
  this.orderBy = orderBy;
  this.orderByPropertyName = orderByPropertyName;
  this.pageCount = Math.ceil(itemsCount / this.pageSize);
  this.items = items;
 }
}
