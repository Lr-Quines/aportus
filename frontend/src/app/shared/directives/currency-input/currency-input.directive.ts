import { Directive } from '@angular/core';
import { NumericMaskDirective } from '../numeric-mask/numeric-mask.directive';

@Directive({
  selector: '[aportusCurrencyInput]'
})
export class CurrencyInputDirective extends NumericMaskDirective {

  // #region Properties
  protected readonly numberFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  // #endregion Properties

}
