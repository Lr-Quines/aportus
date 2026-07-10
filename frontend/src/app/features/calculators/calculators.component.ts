import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavLineItem } from '../../shared/components/nav-line/models/nav-line-item.model';
import { NavLineComponent } from '../../shared/components/nav-line/nav-line.component';
import { navItemsCalculator } from './consts/nav-items-calculator.const';

@Component({
  selector: 'aportus-calculators',
  imports: [
    NavLineComponent,
    RouterOutlet
],
  templateUrl: './calculators.component.html',
  styleUrl: './calculators.component.css',
})
export class CalculatorsComponent {

  // #region Signals
  protected readonly navItemsCalculator = signal<NavLineItem[]>(navItemsCalculator);
  // #endregion Signals

}
