import { Directive } from '@angular/core';

@Directive({
  selector: 'input[aportusInput], textarea[aportusInput]',
  host: {
    'class': 'aportus-input'
  }
})
export class InputDirective {}
