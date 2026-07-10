import { Component } from '@angular/core';
import { LucideDollarSign } from '@lucide/angular';
import { InputFieldComponent } from '../../shared/components/input-field/input-field.component';
import { CurrencyInputDirective } from '../../shared/directives/currency-input/currency-input.directive';

@Component({
  selector: 'aportus-home-page',
  imports: [
    InputFieldComponent,
    CurrencyInputDirective
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {

  protected readonly lucideDollarSign = LucideDollarSign;

}
