import { TableColumn } from "../../../../shared/components/table/interfaces/table-column.interface";
import { CompoundInterestPeriod } from "../interfaces/compound-interest-period.interface";

export const COMPOUND_INTEREST_COLUMNS: TableColumn<CompoundInterestPeriod>[] = [
  { key: 'year', label: 'Ano', align: 'center' },
  { key: 'month', label: 'Mês', align: 'center', sortable: true },
  { key: 'investment', label: 'Investimento acumulado', align: 'right', format: formatCurrency },
  { key: 'interest', label: 'Juros', align: 'right', format: formatCurrency },
  { key: 'contribution', label: 'Aporte', align: 'right', format: formatCurrency },
  { key: 'accumulatedInterest', label: 'Juros acumulados', align: 'right', format: formatCurrency },
  { key: 'accumulatedAssets', label: 'Patrimônio acumulado', align: 'right', format: formatCurrency },
] as const;

function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
