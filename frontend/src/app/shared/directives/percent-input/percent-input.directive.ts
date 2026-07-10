import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[aportusPercentInput]',
})
export class PercentInputDirective {

  // #region Injects
  private readonly elementRef = inject(ElementRef);
  private readonly ngControl = inject(NgControl, { optional: true });
  // #endregion Injects

  // #region Properties
  private readonly numberFormat = new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  private digits = '';
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

    if (numericValue > 100) {
      this.updateValue(this.digits);
      return;
    }

    const newDigits: string = this.numberFormat.format(numericValue / 100);
    this.digits = newDigits

    this.updateValue(newDigits);
  }

  private updateValue(value: string): void {
    this.elementRef.nativeElement.value = value;

    if (this.ngControl?.control) {
      this.ngControl.control.setValue(value, { emitEvent: false });
    }
  }

  @HostListener('keydown', ['$event'])
  public onKeydown(event: KeyboardEvent): void {
    const input = this.elementRef.nativeElement as HTMLInputElement;
    const value = input.value;

    if (!value || event.key !== 'Backspace') {
      return;
    }

    event.preventDefault();
    const digits = value.replace(/\D/g, '');

    if (!digits) {
      this.updateValue('');
      return;
    }

    const newDigits = digits.slice(0, -1);

    if (!newDigits) {
      this.updateValue('');
      return;
    }

    const numericValue = parseFloat(newDigits) / 100;
    this.updateValue(this.numberFormat.format(numericValue / 100));
  }
  // #endregion Methods

}
