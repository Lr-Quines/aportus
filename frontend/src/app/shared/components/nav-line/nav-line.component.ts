import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLineItem } from './models/nav-line-item.model';

@Component({
  selector: 'aportus-nav-line',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav-line.component.html',
  styleUrl: './nav-line.component.css',
})
export class NavLineComponent {

  // #region Signals
  public readonly items = input.required<NavLineItem[]>();
  // #endregion Signals

}
