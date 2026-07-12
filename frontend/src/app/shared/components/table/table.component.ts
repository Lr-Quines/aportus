import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, computed, contentChildren, input, output, signal } from '@angular/core';
import { CellDefDirective } from './directives/cell-def.directive';
import { SortEvent } from './interfaces/sort-event.interface';
import { TableColumn } from './interfaces/table-column.interface';
import { SortDirection } from './types/sort-direction.type';

@Component({
  selector: 'aportus-table',
  imports: [
    NgTemplateOutlet,
    NgClass
  ],
  templateUrl: './table.component.html'
})
export class TableComponent<T extends object> {

  public readonly columns = input.required<TableColumn<T>[]>();
  public readonly data = input.required<T[]>();
  public readonly emptyMessage = input<string>('Nenhum dado encontrado.');
  public readonly trackBy = input<(row: T, index: number) => unknown>((_row, index) => index);
  public readonly localSort = input<boolean>(true);
  public readonly sortChange = output<SortEvent<T>>();

  private readonly cellTemplates = contentChildren(CellDefDirective);

  private readonly sortState = signal<SortEvent<T>>({ key: null, direction: null });

  protected readonly sortedData = computed<T[]>(() => {
    const { key, direction } = this.sortState();
    const rows = this.data();

    if (!this.localSort() || !key || !direction) {
      return rows;
    }

    return [...rows].sort((rowA, rowB) => {
      const comparison = this.compareValues(rowA[key], rowB[key]);
      return direction === 'asc' ? comparison : -comparison;
    });
  });

  protected readonly isEmpty = computed(() => this.sortedData().length === 0);

  protected getCellTemplate(columnKey: string) {
    return this.cellTemplates().find(template => template.aportusCellDef() === columnKey)?.templateRef ?? null;
  }

  protected formatCellValue(column: TableColumn<T>, row: T): string {
    const value = row[column.key];
    return column.format ? column.format(value, row) : String(value ?? '');
  }

  protected onHeaderClick(column: TableColumn<T>): void {
    if (!column.sortable) {
      return;
    }

    const current = this.sortState();
    const isSameColumn = current.key === column.key;
    const nextDirection = this.getNextSortDirection(isSameColumn ? current.direction : null);

    const nextState: SortEvent<T> = {
      key: nextDirection ? column.key : null,
      direction: nextDirection
    };

    this.sortState.set(nextState);
    this.sortChange.emit(nextState);
  }

  protected sortIndicator(column: TableColumn<T>): 'asc' | 'desc' | 'none' {
    const { key, direction } = this.sortState();
    if (key !== column.key || !direction) {
      return 'none';
    }
    return direction;
  }

  private getNextSortDirection(current: SortDirection): SortDirection {
    if (current === null) return 'asc';
    if (current === 'asc') return 'desc';
    return null;
  }

  private compareValues(valueA: unknown, valueB: unknown): number {
    if (valueA == null && valueB == null) return 0;
    if (valueA == null) return -1;
    if (valueB == null) return 1;

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return valueA - valueB;
    }

    if (valueA instanceof Date && valueB instanceof Date) {
      return valueA.getTime() - valueB.getTime();
    }

    return String(valueA).localeCompare(String(valueB), 'pt-BR');
  }

}
