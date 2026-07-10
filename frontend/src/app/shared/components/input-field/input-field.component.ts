import { NgComponentOutlet } from '@angular/common';
import { Component, input, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'aportus-input-field',
  imports: [
    FormsModule,
    NgComponentOutlet
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {

  public readonly icon = input.required<Type<unknown>>();
  public readonly label = input.required<string>();
  public readonly description = input<string>('');
  public readonly prefix = input<string>('');

}
