import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';

// Inicializa os elementos do Swiper (basta chamar uma vez)
register();

@Component({
  selector: 'aportus-auth-layout',
  imports: [
    ThemeToggleComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {

  public readonly subtitle = input.required<string>();

}
