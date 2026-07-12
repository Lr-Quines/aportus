import { Directive } from '@angular/core';
import { NumericMaskDirective } from '../numeric-mask/numeric-mask.directive';

@Directive({
  selector: '[aportusPercentInput]',
})
export class PercentInputDirective extends NumericMaskDirective {

  // #region Properties
  protected readonly numberFormat = new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  protected override readonly formatFactor = 1 / 100;
  protected override readonly maxValue = 100;
  // #endregion Properties

}
