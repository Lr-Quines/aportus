import { NgComponentOutlet } from '@angular/common';
import { Component, computed, input, output, Type } from '@angular/core';
import { ButtonIconPosition, ButtonSize, ButtonVariant } from '../../models/button.model';

@Component({
  selector: 'aportus-button',
  imports: [
    NgComponentOutlet
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {

  // #region Signals
  public readonly variant = input<ButtonVariant>('primary');
  public readonly size = input<ButtonSize>('md');
  public readonly label = input<string>('');
  public readonly icon = input<Type<unknown> | null>(null);
  public readonly iconPosition = input<ButtonIconPosition>('left');
  public readonly disabled = input<boolean>(false);
  public readonly isLoading = input<boolean>(false);
  public readonly fullWidth = input<boolean>(false);
  public readonly type = input<'button' | 'submit' | 'reset'>('button');

  protected readonly clicked = output<void>();

  protected readonly classes = computed<string>(() => {
    return [
      'btn',
      `btn-${this.variant()}`,
      `btn-${this.size()}`,
      this.fullWidth() ? 'btn-full' : '',
      this.isLoading() ? 'btn-loading' : '',
      this.disabled() || this.isLoading() ? 'btn-disabled' : '',
    ].filter(Boolean).join(' ');
  });
  // #endregion Signals

  // #region Methods
  protected handleClick(): void {
    if (!this.disabled() && !this.isLoading()) {
      this.clicked.emit();
    }
  }
  // #endregion Methods

}
