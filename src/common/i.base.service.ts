
export interface IBaseService<T> {
 findOne(id: number | string): Promise<T>;
 findAll(): Promise<T[]>;
 insert(record: Partial<T>): Promise<T>;
 updateById(id: number | string, record: Partial<T>): Promise<T>;
 deleteById(id: number | string): Promise<string>;
}
