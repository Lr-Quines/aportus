export interface TableColumn<T> {
  key: Extract<keyof T, string>;
  label: string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  width?: string;
  format?(value: T[keyof T], row: T): string;
}
