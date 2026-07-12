import { SortDirection } from "../types/sort-direction.type";

export interface SortEvent<T> {
  key: Extract<keyof T, string> | null;
  direction: SortDirection;
}
