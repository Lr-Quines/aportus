import { computed, Directive, HostBinding, HostListener, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Directive()
export abstract class NumericMaskDirective implements FormValueControl<number | null> {

  // #region Signals
  public readonly value = model.required<number | null>();

  protected readonly formattedValue = computed<string>(() => {
    const numericValue: number | null = this.value();
    return numericValue == null
      ? ''
      : this.numberFormat.format(numericValue * this.formatFactor);
  });
  // #endregion Signals

  // #region Properties
  protected abstract readonly numberFormat: Intl.NumberFormat;
  protected readonly formatFactor: number = 1;
  protected readonly maxValue: number | undefined = undefined;

  @HostBinding('value')
  protected get displayValue(): string {
    return this.formattedValue();
  }
  // #endregion Properties

  // #region Methods
  @HostListener('input', ['$event'])
  protected onInput(event: Event): void {
    const htmlInputElement = event.target as HTMLInputElement;
    const digits: string = htmlInputElement.value.replace(/\D/g, '');
    this.applyDigits(digits);
  }

  @HostListener('keydown', ['$event'])
  protected onKeydown(event: KeyboardEvent): void {
    const htmlInputElement = event.target as HTMLInputElement;

    if (!htmlInputElement.value || event.key !== 'Backspace') {
      return;
    }

    const digits: string = htmlInputElement.value.replace(/\D/g, '');

    if (!digits) {
      return;
    }

    event.preventDefault();
    this.applyDigits(digits.slice(0, -1));
  }

  private applyDigits(digits: string): void {
    if (!digits) {
      this.value.set(null);
      return;
    }

    const numericValue: number = parseFloat(digits) / 100;

    if (this.maxValue != null && numericValue > this.maxValue) {
      return;
    }

    this.value.set(numericValue);
  }
  // #endregion Methods

}
