export interface CellContext<T> {
  $implicit: T;
  row: T;
  columnKey: string;
}
