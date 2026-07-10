import { Component } from '@angular/core';
import { LucideCalculator, LucideCalendarDays, LucideDollarSign, LucidePercent } from '@lucide/angular';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { InputFieldComponent } from '../../../shared/components/input-field/input-field.component';
import { CurrencyInputDirective } from '../../../shared/directives/currency-input/currency-input.directive';
import { PercentInputDirective } from '../../../shared/directives/percent-input/percent-input.directive';

@Component({
  selector: 'aportus-compound-interest',
  imports: [
    InputFieldComponent,
    CurrencyInputDirective,
    ButtonComponent,
    PercentInputDirective
  ],
  templateUrl: './compound-interest.component.html',
  styleUrl: './compound-interest.component.css',
})
export class CompoundInterestComponent {

  // #region Properties
  protected readonly lucideDollarSign = LucideDollarSign;
  protected readonly lucidePercent = LucidePercent;
  protected readonly lucideCalendarDays = LucideCalendarDays;
  protected readonly lucideCalculator = LucideCalculator;
  // #endregion Properties


}
