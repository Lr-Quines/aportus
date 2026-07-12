import { Component, inject, signal } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { LucideCalculator, LucideCalendarDays, LucideDollarSign, LucidePercent } from '@lucide/angular';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputFieldComponent } from '../../../shared/components/input-field/input-field.component';
import { TableColumn } from '../../../shared/components/table/interfaces/table-column.interface';
import { TableComponent } from '../../../shared/components/table/table.component';
import { CurrencyInputDirective } from '../../../shared/directives/currency-input/currency-input.directive';
import { PercentInputDirective } from '../../../shared/directives/percent-input/percent-input.directive';
import { COMPOUND_INTEREST_COLUMNS } from './consts/compound-interest-columns.const';
import { CompoundInterestPeriod } from './interfaces/compound-interest-period.interface';
import { CompoundInterest } from './interfaces/compound-interest.interface';
import { CompoundInterestFormService } from './services/compound-interest-form/compound-interest-form.service';

@Component({
  selector: 'aportus-compound-interest',
  imports: [
    InputFieldComponent,
    CurrencyInputDirective,
    ButtonComponent,
    PercentInputDirective,
    FormField,
    TableComponent
  ],
  templateUrl: './compound-interest.component.html',
  styleUrl: './compound-interest.component.css',
})
export class CompoundInterestComponent {

  // #region Injects
  protected readonly formService = inject(CompoundInterestFormService);
  // #endregion Injects

  // #region Signals
  protected readonly compoundInterestProjection = signal<CompoundInterestPeriod[]>([]);
  // #endregion Signals

  // #region Properties
  protected readonly columns: TableColumn<CompoundInterestPeriod>[] = COMPOUND_INTEREST_COLUMNS;

  protected readonly lucideDollarSign = LucideDollarSign;
  protected readonly lucidePercent = LucidePercent;
  protected readonly lucideCalendarDays = LucideCalendarDays;
  protected readonly lucideCalculator = LucideCalculator;
  // #endregion Properties

  // #region Methods
  protected calculateProjection(): void {
    const projection: CompoundInterestPeriod[] = [];
    const compoundInterest: CompoundInterest = this.formService.submitPayload();
    let investment: number = compoundInterest.initialAssets;
    let contribution: number = compoundInterest.monthlyContributions;
    let accumulatedInterest: number = 0;
    let accumulatedAssets: number = compoundInterest.initialAssets;

    for (let period: number = 1; period <= compoundInterest.period; period++) {
      const interest = accumulatedAssets * (compoundInterest.expectedYield / 100);
      accumulatedAssets += contribution + interest;
      accumulatedInterest += interest;

      projection.push({
        month: period,
        year: Math.ceil(period / 12),
        investment,
        interest,
        contribution,
        accumulatedInterest,
        accumulatedAssets
      });

      investment += contribution;
    }

    this.compoundInterestProjection.set(projection);
  }
  // #endregion Methods

}
