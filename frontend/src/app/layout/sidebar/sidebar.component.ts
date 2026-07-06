import { NgComponentOutlet } from '@angular/common';
import { Component, model, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideX } from '@lucide/angular';
import { OffcanvasComponent } from '../../shared/components/offcanvas/offcanvas.component';
import { SIDEBAR_ITEMS } from './consts/sidebar-items.const';

@Component({
  selector: 'aportus-sidebar',
  imports: [
    NgComponentOutlet,
    RouterLink,
    LucideX,
    OffcanvasComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  // #region Signals
  readonly isSidebarExpanded = model<boolean>(false);
  readonly close = output<void>();
  // #endregion Signals

  // #region Properties
  protected readonly items = SIDEBAR_ITEMS;
  // #endregion Properties

}
