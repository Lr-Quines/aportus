import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[aportusCurrencyInput]',
})
export class CurrencyInputDirective {

  // #region Injects
  private readonly elementRef = inject(ElementRef);
  private readonly ngControl = inject(NgControl, { optional: true });
  // #endregion Injects

  // #region Properties
  private readonly numberFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  // #endregion Properties

  // #region Methods
  @HostListener('input', ['$event'])
  public onInput(event: Event): void {
    const htmlInputElement = event.target as HTMLInputElement;

    if (!htmlInputElement) {
      return;
    }

    const value: string = htmlInputElement.value;
    const digits: string = value.replace(/\D/g, '');

    if (!digits) {
      this.updateValue('');
      return;
    }

    const numericValue: number = parseFloat(digits) / 100;
    const formattedValue: string = this.numberFormat.format(numericValue);

    this.updateValue(formattedValue);
  }

  private updateValue(value: string): void {
    this.elementRef.nativeElement.value = value;

    if (this.ngControl?.control) {
      this.ngControl.control.setValue(value, { emitEvent: false });
    }
  }
  // #endregion Methods

}
